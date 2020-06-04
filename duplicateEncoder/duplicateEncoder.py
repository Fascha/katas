from collections import Counter

def duplicateEncode(word):
    charCount = Counter(word.lower())
    result = ["(" if charCount[c] == 1 else ")" for c in word.lower() ]
    
    return "".join(result)

if __name__ == "__main__":
    assert(duplicateEncode("din") == "(((");
    assert(duplicateEncode("recede") == "()()()");  
    assert(duplicateEncode("Success") == ")())())");  
    assert(duplicateEncode("(( @") == "))((");
    print("All Test passed!")
    print("-" * 32)