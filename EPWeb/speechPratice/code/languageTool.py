#https://predictivehacks.com/languagetool-grammar-and-spell-checker-in-python/
import language_tool_python
tool = language_tool_python.LanguageTool('en-US')
def checkGrammar(text):
    
    matches = tool.check(text)
    my_mistakes = []
    my_corrections = []
    start_positions = []
    end_positions = []

    for rules in matches:
        if len(rules.replacements)>0:
            start_positions.append(rules.offset)
            end_positions.append(rules.errorLength+rules.offset)
            my_mistakes.append(text[rules.offset:rules.errorLength+rules.offset])
            my_corrections.append(rules.replacements[0])



    my_new_text = list(text)


    for m in range(len(start_positions)):
        for i in range(len(text)):
            my_new_text[start_positions[m]] = my_corrections[m]
            if (i>start_positions[m] and i<end_positions[m]):
                my_new_text[i]=""

    my_new_text = "".join(my_new_text)
    errorArray = list(zip(my_mistakes,my_corrections))
    positions = list(zip(start_positions,end_positions))
    data = {
        'checkedSent' : my_new_text,
        'error' : errorArray,
        'positions' : positions
    }
    return data