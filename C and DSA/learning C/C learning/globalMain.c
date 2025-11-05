#include <stdio.h>

// run code will compile only this file not the file from where extern will take value or defination //hence it always give undefined reference to `foo' , `aGloAnother'

// when using extern then it is must to compile that file along with it and below code must be consecutive

//  gcc globalMain.c GlobalfooLink.c
// ./a.exe

// In the globalMain.c file, we will declare the global variable with the extern keyword, to say that we’re defining this variable elsewhere. It’s a similar declaration to the foo function prototype that we will also define in a separate file. The compiler understands implicitly that it should consider the foo prototype as extern as well.

extern int aGloAnother; // Global variable, defined elsewhere //if this variable is declared extern then using foo(void) function which is declared in another same file need not to write extern if this function is called and it contains the same variable as output which is already declared as extern above 



// extern int aGloAnother = 0; ////Error as if a variable is declared extern then it cannot be initialized

void foo(void); // Foo prototype, defined elsewhere
// is identical to
  // extern void foo(void);

extern void foo(void); // Foo prototype, defined elsewhere //Foo: a = 42//from this function defined somewhere //extern before function is necessary if extern is not used above this , like with extern int aGloAnother; if used above then using extern here is not needed hence
  

int main(void)
{

    int a=4;
    printf("%d\n",a); //4

    //  return (0);
     
     //we done it to automatically let it compile and create globalMain.exe file because if there will be any error then globalMain.exe file will never be made and it only shows undefined reference to `aGloAnother'

 printf("Main: aGloAnother = %d\n", aGloAnother); // aGloAnother == 100 //due to extern , it is declared somewhere
 foo(); //undefined reference to `foo
 printf("Main: a = %d\n", aGloAnother); // aGloAnother == 42
 aGloAnother = 200;
 printf("Main: a = %d\n", aGloAnother); // aGloAnother == 200
 
 return (0);


//  gcc globalMain.c GlobalfooLink.c
// ./a.exe


 /* Final output
Main: aGloAnother = 100
Foo: aGloAnother = 42
Main: aGloAnother = 42
Main: aGloAnother = 200
*/

}