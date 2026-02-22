from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
import uvicorn
import models
import database
import scheduler

# Init DB
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Goksori Trading API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def start_scheduler_job():
    # Start the scheduler in background
    scheduler.start_scheduler()

@app.get("/")
def read_root():
    return {"message": "Goksori Trading API is running"}

@app.get("/api/rankings")
def get_rankings(limit: int = 10, db: Session = Depends(database.get_db)):
    """
    Returns top stocks sorted by negative sentiment ratio (Goksori Index).
    """
    # Get the latest stat entry for each stock
    # In a real app, we might use a subquery or window function.
    # Here, we iterate distinct codes.
    latest_stats = []
    codes = db.query(models.SentimentStat.stock_code).distinct().all()
    
    for (code,) in codes:
        stat = db.query(models.SentimentStat)\
            .filter(models.SentimentStat.stock_code == code)\
            .order_by(models.SentimentStat.timestamp.desc())\
            .first()
        if stat:
            latest_stats.append(stat)
            
    # Sort by negative_ratio descending
    latest_stats.sort(key=lambda x: x.negative_ratio, reverse=True)
    
    return latest_stats[:limit]

@app.get("/api/stock/{code}")
def get_stock_history(code: str, period: str = "1d", db: Session = Depends(database.get_db)):
    """
    Get sentiment history for a stock.
    Period: 1d, 1w, 1m, etc. (Not fully implemented, returns all for now)
    """
    query = db.query(models.SentimentStat).filter(models.SentimentStat.stock_code == code)
    
    # Basic filter example
    if period == "30m":
         cutoff = datetime.now() - timedelta(minutes=30)
         query = query.filter(models.SentimentStat.timestamp >= cutoff)
    elif period == "1d":
         cutoff = datetime.now() - timedelta(days=1)
         query = query.filter(models.SentimentStat.timestamp >= cutoff)
         
    query = query.order_by(models.SentimentStat.timestamp.asc())
    return query.all()

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
