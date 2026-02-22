# Simple Keyword-based Sentiment Analyzer for Korean Stock Market
# "Moksori" / "Goksori" specific keywords

NEGATIVE_KEYWORDS = [
    "망했다", "하한가", "한강", "구조대", "손절", "개미지옥", "폭락", "떡락", 
    "상폐", "상장폐지", "휴지조각", "삭제", "반토막", "물렸다", "돔황차", "돔황챠",
    "곡소리", "지하실", "나락", "설거지", "개잡주", "사기", "쓰레기", "존버는 승리한다" # often sarcastic in crash
]

POSITIVE_KEYWORDS = [
    "상한가", "떡상", "폭등", "대박", "수익", "익절", "가즈아", "신고가", 
    "호재", "점상", "연상", "찬티", "성투", "불기둥", "매수", "추매"
]

def analyze_sentiment(text: str) -> int:
    """
    Analyzes the sentiment of a given text (title).
    Returns:
    -1: Negative (Goksori)
     1: Positive
     0: Neutral
    """
    text = text.lower()
    
    # Check for negative keywords first (priority as we want to detect despair)
    for kw in NEGATIVE_KEYWORDS:
        if kw in text:
            return -1
            
    # Check for positive keywords
    for kw in POSITIVE_KEYWORDS:
        if kw in text:
            return 1
            
    return 0

def calculate_goksori_index(posts: list[str]) -> dict:
    """
    Calculates stats from a list of post titles.
    Returns dictionary with counts and 'goksori_percentage'
    """
    total = len(posts)
    if total == 0:
        return {"neg": 0, "pos": 0, "neu": 0, "ratio": 0.0, "total": 0}
        
    neg = 0
    pos = 0
    neu = 0
    
    for title in posts:
        score = analyze_sentiment(title)
        if score == -1:
            neg += 1
        elif score == 1:
            pos += 1
        else:
            neu += 1
            
    ratio = (neg / total) * 100 if total > 0 else 0.0
    
    return {
        "neg": neg,
        "pos": pos, 
        "neu": neu,
        "ratio": ratio,
        "total": total
    }
