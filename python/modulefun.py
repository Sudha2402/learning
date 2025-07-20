def privatefun():
    print("this is modulefun function")
    
print("hello") #it will be executed along with imported function as it is gloabl statement.

if (__name__ == "__main__"):
    print("running main file")
    privatefun()
    
