import requests
from bs4 import BeautifulSoup
from datetime import datetime

# Headers to mimic a browser
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

def get_recent_posts(stock_code: str, pages: int = 2):
    """
    Scrapes recent posts from Naver Finance Item Board.
    Returns a list of titles.
    """
    base_url = "https://finance.naver.com/item/board.naver"
    titles = []
    
    for page in range(1, pages + 1):
        try:
            params = {"code": stock_code, "page": page}
            response = requests.get(base_url, params=params, headers=HEADERS)
            response.encoding = 'EUC-KR' # Naver Finance uses EUC-KR
            
            if response.status_code != 200:
                print(f"Failed to fetch page {page} for {stock_code}")
                continue

            soup = BeautifulSoup(response.text, "html.parser")
            
            # The table rows with posts
            rows = soup.select("table.type2 tr")
            
            for row in rows:
                # Titles are usually in 'title' class
                title_element = row.select_one(".title a")
                if title_element:
                    title_text = title_element.get_text(strip=True)
                    titles.append(title_text)
                    
        except Exception as e:
            print(f"Error scraping {stock_code} page {page}: {e}")
            
    return titles
