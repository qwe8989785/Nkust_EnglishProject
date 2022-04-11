
from wiktionaryparser import WiktionaryParser
#維基字典查詢

def getWikiResource(search):
    parser = WiktionaryParser()
    parser.set_default_language('english')
    result = parser.fetch(search)
    return result

