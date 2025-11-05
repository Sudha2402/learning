#include <stdio.h>

//  All of these preprocessor directives begin with a ‘#’ (hash) symbol. The ‘#’ symbol indicates that whatever statement starts with a ‘#’ will go to the preprocessor program to get executed.

// Examples of some preprocessor directives are: #include, #define, #ifndef, etc.

// Note Remember that the # symbol only provides a path to the preprocessor, and a command such as include is processed by the preprocessor program. For example, #include will include the code or content of the specified file in your program.

// Macros
#define LIMIT 5
// Note There is no semi-colon (;) at the end of the macro definition. Macro definitions do not need a semi-colon to end.

// Macros With Arguments
// #define foo(a, b) a + b //as due to included file GlobalfooLink.c , there is also foo function with one parameter and here it is of 2 parameter and with same name hence throw error

#define add(a, b) a + b
#define func(r) r *r

// macro with parameter
#define AREA(l, b) (l * b)

// Predefined Macros
// __LINE__ Macro
// __FILE__ Macro //if not commented then it will give error
// __DATE__ Macro
// __TIME__ Macro
// __STDC__ Macro
// __STDC__HOSTED Macro
// __STDC_VERSION__
// __cplusplus
// __OBJC__ Macro

// . File Inclusion
// The #include directive is used to include the content of another file in the current file. The included file can be a header file or a source file.
#include <stdlib.h>
// #include "C:\Sudhadocuments\C files\C learning\array.c"
/*
In file included from preprocessor.c:35:0:
C:\Sudhadocuments\C files\C learning\array.c: In function 'main':
C:\Sudhadocuments\C files\C learning\array.c:283:5: warning: implicit declaration of function 'arrayRev' [-Wimplicit-function-declaration]
     arrayRev(arrToRev);
     ^~~~~~~~
preprocessor.c: At top level:
preprocessor.c:43:5: error: redefinition of 'main'
 int main()
     ^~~~
In file included from preprocessor.c:35:0:
C:\Sudhadocuments\C files\C learning\array.c:274:5: note: previous definition of 'main' was here
 int main()
     ^~~~

*/

#include "GlobalfooLink.c"
/*
In file included from preprocessor.c:51:0:
GlobalfooLink.c:13:14: error: macro "foo" requires 2 arguments, but only 1 given
 void foo(void)
              ^
GlobalfooLink.c:14:1: error: expected '=', ',', ';', 'asm' or '__attribute__' before '{' token
 {
 ^
*/

// program to demonstrates the use of #if, #elif, #else,
//  and #endif  preprocessor directives.
//  defining PI
#define PI 3.14159

// Other Directives
// #undef Directive

// defining MIN_VALUE
#define MIN_VALUE 10

// #pragma Directive
// #pragma startup
// #pragma exit
// pragma program will not work with GCC compilers.
void func1();
void func2();

// specifying funct1 to execute at start
#pragma startup func1
// specifying funct2 to execute before end
#pragma exit func2

// as GCC does not support #pragma startup or exit. However, you can use the below code for the expected output on GCC compilers.

void __attribute__((constructor)) func1();
void __attribute__((destructor)) func2();

void func2() { printf("Inside func2()\n"); } // Inside func2()

void func1() { printf("Inside func1()\n"); }

// this function need not to call in main if attribute is used
// Inside func2()

int main()
{

    for (int i = 0; i < LIMIT; i++)
    {
        printf("%d \n", i);
    }

    printf("\n");

    int l1 = 10, l2 = 5, area;
    area = AREA(l1, l2);                      // replace AREA(l1, l2) with (l1* l2)
    printf("Area of rectangle is: %d", area); // Area of rectangle is: 50

    printf("\n");
    printf("Line number is: %d\n", __LINE__); // Line number is: 24//same line number which is given in left side showing the line of code

    printf("File name of this program is: %s\n", __FILE__); // File name of this program is: preprocessor.c

    /*this error will occur when __FILE__  is tried to define at top explicitly
    preprocessor.c:15:1: error: expected identifier or '(' before string constant
  __FILE__ Macro
  ^~~~~~~~
    */

    printf("Program Compilation Date: %s\n", __DATE__); // Program Compilation Date: Nov  4 2024

    printf("Time of compilation is: %s\n", __TIME__); // Time of compilation is: 12:05:16 //12:16:30 //changes every time // this compilation time is very high because it counts the compilation time of every code done since the gcc was installed in every program

    printf("Compiler Standard Number: %d\n", __STDC__); // Compiler Standard Number: 1

    printf("STDC_HOSTDED Number: %d\n", __STDC_HOSTED__); // STDC_HOSTDED Number: 1

    printf("Compiler Standard VERSION Number: %ld\n", __STDC_VERSION__); // Compiler Standard VERSION Number: 201112 //The value 201112L signifies the 2011 revision of the C standard

    //  printf("__cplusplus: %ld\n",__cplusplus); //

    //  printf("__OBJC__: %ld\n",__OBJC__); //

    foo(); // from the inclued file GlobalfooLink.c //Foo: a = 42 //this can also be done with extern but extern but here it is done with file inclusion

// program to demonstrates the use of #if, #elif, #else,
//  and #endif  preprocessor directives.
#ifdef PI
    printf("PI is defined\n"); // PI is defined

#elif defined(SQUARE)
    printf("Square is defined\n");
#else
#error "Neither PI nor SQUARE is defined"
#endif

#ifndef SQUARE
    printf("Square is not defined"); // Square is not defined
#else
    // cout << "Square is defined" << endl;
    printf("Square is defined"); // Square is not defined
#endif

    printf("\n");

    // Undefining and redefining MIN_VALUE
    printf("Min value is: %d\n", MIN_VALUE); // Min value is: 10 //from above defined

// undefining max value
#undef MIN_VALUE

// again redefining MIN_VALUE
#define MIN_VALUE 20

    printf("Min value after undef and again redefining it: %d\n", MIN_VALUE); // Min value after undef and again redefining it: 20

    printf("\n");

    void func1();
    void func2();
    printf("Inside main()\n"); // Inside main()

    // The above code will produce the output as given below when run on GCC compilers:
    // Inside main()c
    // This happens because GCC does not support #pragma startup or exit. However, you can use the below code for the expected output on GCC compilers.  use this above main void __attribute__((constructor)) func1();
    // void __attribute__((destructor)) func2();

    printf("");
    printf("\n");

    return 0;
}