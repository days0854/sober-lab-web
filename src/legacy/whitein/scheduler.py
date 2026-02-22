from apscheduler.schedulers.background import BackgroundScheduler
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
import models
import scraper
import analyzer
import time
from datetime import datetime

# Initialize DB tables
models.Base.metadata.create_all(bind=engine)

# Target Stocks (Top market cap or popular ones for demo)
# 005930: Samsung Electronics
# 000660: SK Hynix
# 035720: Kakao
# 035420: Naver
# 252670: KODEX 200 Futures Leverage (Volatile)
TARGET_STOCKS = {
    "005930": "삼성전자",
    "000660": "SK하이닉스",
    "035720": "카카오",
    "035420": "NAVER",
    "247540": "에코프로비엠",
    "001570": "금양" # Example of volatile stock
}

def update_stock_sentiment():
    print(f"[{datetime.now()}] Starting Sentiment Update...")
    db: Session = SessionLocal()
    try:
        for code, name in TARGET_STOCKS.items():
            print(f"Analyzing {name} ({code})...")
            # 1. Scrape
            titles = scraper.get_recent_posts(code, pages=3) # ~60 posts
            
            # 2. Analyze
            stats = analyzer.calculate_goksori_index(titles)
            
            # 3. Save to DB
            stat_entry = models.SentimentStat(
                stock_code=code,
                stock_name=name,
                positive_count=stats["pos"],
                negative_count=stats["neg"],
                neutral_count=stats["neu"],
                negative_ratio=stats["ratio"],
                total_posts=stats["total"],
                buzz_score=stats["total"] # Simple buzz score
            )
            db.add(stat_entry)
            
        db.commit()
        print("Update Complete.")
    except Exception as e:
        print(f"Error in scheduler: {e}")
        db.rollback()
    finally:
        db.close()

def start_scheduler():
    scheduler = BackgroundScheduler()
    # Run every 30 minutes
    scheduler.add_job(update_stock_sentiment, 'interval', minutes=30)
    # Also run immediately on startup (optional, maybe controlled via API)
    # scheduler.add_job(update_stock_sentiment, 'date', run_date=datetime.now())
    scheduler.start()
