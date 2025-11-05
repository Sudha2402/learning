#include <stdio.h>

// GlobalfooLink.c
// In the GlobalfooLink.c file, we declare and define the global variable a as well as the foo function:


int aGloAnother = 100; // Global variable declared and defined here but it is accessed in  GlobalfooLink.c file

// As with function prototypes, we can of course declare extern int a in a header.h file. Incidentally, it is better than defining a global variable directly in the header.

// Of course, having a variable that is accessible by any function in any file of a program might quickly prove to be a security concern. Which is why we can make our global variables static

void foo(void)
{
 aGloAnother = 42;
 printf("Foo: a = %d\n", aGloAnother); // a == 42
}

/*
int main(){ // multiple definition of `main' error if both file are compiled together //hence comment this main

    foo();
}
*/


// gcc globalMain.c GlobalfooLink.c