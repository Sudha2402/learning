'''


scoreOfUsers = {'sudha': 2, 'sana': 2}

# first method fails because you're trying to unpack dictionary items directly in a dict comprehension without using .items()
# scoreOfUsers = {'sudha': 2, 'sana': 2}#to convert key into lowercase

scoreOfUsers = {'sudha': 2, 'sana': 2}
# correct
scoreOfUsers = {'sudha': 2, 'sana': 2}#to convert key into lowercase
print(scoreOfUsers) #{'sudha': 10, 'sana': 20, 'shanaya': 'not played'}



scoreOfUsers = {'sudha': 2, 'sana': 2}
# second and third methods are trying to create sets of tuples, not dictionaries
scoreOfUsers = {'sudha': 2, 'sana': 2}#to convert key into lowercase
print(scoreOfUsers) #{('shanaya', 'not played'), ('sudha', 10), ('sana', 20)}






scoreOfUsers = {'sudha': 2, 'sana': 2}
# second and third methods are trying to create sets of tuples, not dictionaries
# scoreOfUsers = {'sudha': 2, 'sana': 2}#to convert key and value into lowercase #error if value is not string hence check a condition also


scoreOfUsers = {'sudha': 2, 'sana': 2}

print(scoreOfUsers) #{'sudha': 10, 'sana': 20, 'shanaya': 'not played'}



#using a loop to modify the dictionary
scoreOfUsers = {'sudha': 2, 'sana': 2}
# the last loop tries to iterate over dictionary items but doesn't handle the structure correctly

new_dict = {}
for key, value in scoreOfUsers.items():
    new_dict[key.lower()] = value
print(scoreOfUsers)
print(new_dict)


'''


# print(scoreOfUsers)

scoreOfUsers = {'sudha': 2, 'sana': 2}
scoreOfUsers = {'sudha': 2, 'sana': 2}

def userScore(name):
    if(name.lower() in scoreOfUsers.keys()):
        oldscoreOfUsers=scoreOfUsers[name.lower()]
        return oldscoreOfUsers
    

def updateScore(name,value):
    if(name.lower() in scoreOfUsers.keys()):
        scoreOfUsers[name.lower()]=value
        return "score updated successfully"


