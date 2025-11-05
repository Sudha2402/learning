#include <stdio.h>

// Note: local and global keyword is not used , but it is the position of declaration which decides it's scope

int aGlobal; // Global variable initialized to 0 by default

void foo(void)
{
   aGlobal = 42;                           // Global variable accessible without having been declared in the function
   printf("Foo: aGlobal = %d\n", aGlobal); // aGlobal == 42
}

void fooLocalStatic(void)
{
   int a = 100;
   static int b = 100;
   static int bStaticLocal = 100;

   printf("a = %d, b = %d\n", a, b);
   printf("b = %d\n", bStaticLocal);
   a++;
   b++;
}

int staticCheck(int b)
{
   // staticCheck has its own copy of the variable 'b' passed in parameters

   int a = 5;
   int e = 25;
   int f = 23; // local variable

   // int b = 10; // Priority to the Local Variable // Changing the value of 'b' in staticCheck but not in main//causes error as int b is redeclared //
   // since both variables are distinct

   b = 10;//no error//updates b at same address of initial b but this change will not be reflected in main as b is not declared globally

   printf("%d\n", a);  // 5//a is undefined if not passed here
   printf("%d\n", b);  // 10//b is undefined if not passed here //
   printf("%d\n", &b); // 6356736 //for b passed//but data it still contains main global when asked in main as this local b get's erased when function ends

   return (e);

} // the variable 'a' ceases to exist in RAM here.
// // the variable 'e' ceases to exist here, but we returned its value
// before its destruction.

void foob(int *a)
{//as address i passes as foob(&a)
   *a = 145;                              // Change what is at the address of 'a' and seen globally
   printf("Foob: Variable a = %d\n", *a); // *a == 145
}

int main(void)
{

   printf("Main: aGlobal = %d\n", aGlobal); // aGlobal = 0 //from global variable default initialization
   foo();                                   // changed the value of aGlobal
   printf("Main: aGlobal = %d\n", aGlobal); // aGlobal = 42
   aGlobal = 200;                           // updating again in main
   printf("Main: aGlobal = %d\n", aGlobal);       // aGlobal = 200

   int a = 10;
   int b = 20;
   // int static global c=30;//error
   printf("%d %d\n", a, b);
   printf("%d %d\n", &a, &b); // 6356764  4206596
   staticCheck(b);
   int value = staticCheck(b); // Pass the variable 'b' to function staticCheck// the return value of staticCheck is saved here
   // printf("%d \n",f);// ERROR : main does not know any variable named 'a'!
   printf("%d\n", value);
   printf("Main: Variable b = %d\n", b); // b=20 , it will take the main value of b not after the function call

   a = 10;
   printf("Main: Variable a = %d\n", a); // a == 10
   foob(&a);                             // Pass the address of 'a', not the value
   printf("Main: Variable a = %d\n", a); // a == 145

   fooLocalStatic();
   fooLocalStatic();
   fooLocalStatic();
   fooLocalStatic();
   fooLocalStatic();
   /*
   a = 100, b = 100
   a = 100, b = 101
   a = 100, b = 102
   a = 100, b = 103
   a = 100, b = 104
   */

   // printf("b = %d\n", bStaticLocal);//this variable is made static in function , it is in memory but can't be used outside but whenever the function will be called , it updates everytime.

   // Note:
   /*
   Static Variables
   We can declare a local or global variable as a static. The static keyword has a very simple logic. A static variable is by default a global variable: stored neither in the stack nor the heap, it has the same lifespan as its program. But unlike a true global variable, it has a limited scope:

   inside a function, it’s a global that’s only visible inside the function in which we declare it.
   outside any function, it’s a global variable visible only in the file (i.e. in the compilation unit) in which we declare it.



   For static variables declared outside any function, the static keyword restrains their scope to the file in which we declare them. The functions in the same file following the global static variable’s declaration will be able to use it, but we won’t be able to access it from another of the program’s files.





   If we return to our previous example of the global variable across two files, and if we transform the global in foo.c into a static, we will get compilation errors: “undefined reference to ‘a’”. This comes from the fact that we declare in main.c that there is an extern definition of a elsewhere in the program. Except that a is a static variable, which means it is “invisible” to the compiler. Since it cannot find a valid definition of the global variable a, the compiler returns an error. For the compiler, extern and static are exact opposites.

   Similarly, it is possible and well-advised to use the static keyword when declaring functions that we only use in a single file of a program. Otherwise, the compiler thinks by default that the declared functions are extern and will have to be linked to other files. Using the static keyword is a simple security measure for a program. It might even speed up compilation in some cases.



   */
}