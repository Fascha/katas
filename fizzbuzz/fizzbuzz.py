"""

    * A number is fizz if it is divisible by 3 or if it has a 3 in it
    * A number is buzz if it is divisible by 5 or if it has a 5 in it

    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz
    16
    17
    Fizz
    19
    Buzz

"""

def fizzbuzz(number):
    if number % 5 == 0 or "{}".format(number)[-1] == "5":
        if number % 3 == 0:
            return "Fizzbuzz"
        else:
            return "Buzz"
    elif number % 3 == 0 or "{}".format(number)[-1] == "3":
        return "Fizz"
    return number



if __name__ == "__main__":
    assert(fizzbuzz(1) == 1)
    assert(fizzbuzz(2) == 2)
    assert(fizzbuzz(3) == "Fizz")
    assert(fizzbuzz(4) == 4)
    assert(fizzbuzz(5) == "Buzz")
    assert(fizzbuzz(6) == "Fizz")
    assert(fizzbuzz(7) == 7)
    assert(fizzbuzz(8) == 8)
    assert(fizzbuzz(9) == "Fizz")
    assert(fizzbuzz(10) == "Buzz")
    assert(fizzbuzz(15) == "Fizzbuzz")
    print("All Test passed!")
    print("-" * 32)