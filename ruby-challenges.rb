# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def even_odd(number)
    if number % 2 === 0
        return "#{number} is even"
    else
        return "#{number} is odd"
    end
end

repostsOne = 7
# Expected output: '7 is odd'
repostsTwo = 42
# Expected output: '42 is even'
repostsThree = 221
# Expected output: '221 is odd'


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def remove_vowel(string)
    if string.is_a? String
        string.delete "aeiou"
        else
            "'#{string}' is not a string value."
        end
    end
    
    p remove_vowel(beatles_albumOne) # output: "Rbbr Sl"
    p remove_vowel(beatles_albumTwo) # output: "Sgt Pppr"
    p remove_vowel(beatles_albumThree) # output: "bby Rd"
    p remove_vowel(5) # output: "'5' is not a string value."
    
    
beatles_albumOne = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_albumTwo = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_albumThree = 'Abbey Road'
# Expected output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palindrome(string)
    if string.downcase == string.downcase.reverse
      p "#{string} is a palindrome"
    else
      p "#{string} is not a palindrome"
    end
  end
  
palindrome(palindrome_testerOne)
palindrome(palindrome_testerTwo)
palindrome(palindrome_testerThree)


palindrome_testerOne = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_testerTwo = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_testerThree = 'Rotator'
# Expected output: 'Rotator is a palindrome'
