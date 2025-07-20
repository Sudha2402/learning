try: #it will not terminate the file in between as try and catch implemented.
    num1=23
    # num1='534'
    num2=0
    num2=5
    print(num1/num2)

except ZeroDivisionError:
    print("Zero division error")
except TypeError:
    print("Type Error")
except ValueError:
    print("Value Error")
except Exception as e:
    print(e)
else:
    print("successfully executed try block")
finally:
     print("finally block works even after return") #useful in case of function return



#we we want to terminate the program with any exception with our statement line then we use raise

try:
        num1=23
     
        num2=0
       
        
        if(num2==0):
            raise ZeroDivisionError("Make sure that this program is not for zero division")
        else:
            print(num1/num2)
except Exception as e:
    print(e)
        

def retfn():
    try:
        num1=23
        num2=5
        print(num1/num2)
        return
    except Exception as e:
        print(e)
        
    finally:
     print("finally block works even after return in function call") #useful in case of function return
    
  
  
retfn()  
    
print("Hello try")





