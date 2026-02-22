from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime

class SentimentStat(Base):
    __tablename__ = "sentiment_stats"

    id = Column(Integer, primary_key=True, index=True)
    stock_code = Column(String, index=True)
    stock_name = Column(String)
    timestamp = Column(DateTime, default=datetime.now, index=True)
    
    positive_count = Column(Integer, default=0)
    negative_count = Column(Integer, default=0)
    neutral_count = Column(Integer, default=0)
    
    # Ratios for easy querying
    negative_ratio = Column(Float, default=0.0) # The "Goksori" index
    total_posts = Column(Integer, default=0)

    # Buzz score (e.g. total posts relative to average) - simple implementation for now
    buzz_score = Column(Float, default=0.0)
