// Run this in terminal open from file loaction directly or from vscode terminal that we use to see the output but the ther you have to give lines by yourself to see the arguements but in case of no arguements it will show the output with direct run command

/*
// Introduction to Command Line Arguments in C

The command line is a text interface for your computer that allows you to enter commands for immediate execution. A command-line can perform almost everything that a graphical user interface can. Many tasks can be performed more rapidly and are easier to automate.

Let's say we have a weather forecasting application developed in any language. When we run the program, it will display a graphical user interface (GUI) where you can enter the city name and hit the ENTER button to know about the current weather. But if you don't have that GUI, which means you can't click on any buttons, that is where command-line arguments come into play, where we pass the parameters in the terminal box to do any actions.

For example:

weather "Delhi" and hit the ENTER key, this will show you the current weather.


For example:

You can navigate around your computer's files and directories using the command line.
The command line can be scripted to automate complex tasks, like the example given below:
If a user wants to put 50+ files' data into a file, this is a highly time-consuming task. Copying data from 50+ files, on the other hand, can be done in less than a minute with a single command at the command line. And many more..

Syntax:
cd “Directory name”, like cd desktop

What are Command-Line Arguments?

Command-line arguments are simple parameters that are given on the system's command line, and the values of these arguments are passed on to your program during program execution. When a program starts execution without user interaction, command-line arguments are used to pass values or files to it.

What are Command-Line Arguments in C?

When the main function of a program contains arguments, then these arguments are known as Command Line Arguments.

The main function can be created with two methods: first with no parameters (void) and second with two parameters. The parameters are argc and argv, where argc is an integer and the argv is a list of command line arguments.


argc denotes the number of arguments given, while argv[] is a pointer array pointing to each parameter passed to the program. If no argument is given, the value of argc will be 1.
The value of argc should be non-negative.
Syntax:
* Main function without arguments:
    int main()

* Main function with arguments:
    int main(int argc, char* argv[])

// Properties of Command Line Arguments in C


Command line arguments in C are passed to the main function as argc and argv.
Command line arguments are used to control the program from the outside.


argv[argc] is a Null pointer.

The name of the program is stored in argv[0],
 the first command-line parameter in argv[1], and the last argument in argv[n].


argc (ARGument Count) is an integer variable that stores the number of command-line arguments passed by the user including the name of the program. So if we pass a value to a program, the value of argc would be 2 (one for argument and one for program name)
The value of argc should be non-negative.
argv (ARGument Vector) is an array of character pointers listing all the arguments.
If argc is greater than zero, the array elements from argv[0] to argv[argc-1] will contain pointers to strings.
argv[0] is the name of the program , After that till argv[argc-1] every element is command -line arguments.



Command-line arguments are useful when you want to control your program from outside rather than hard coding the values inside the code.
To allow the usage of standard input and output so that we can utilize the shell to chain commands.
To override defaults and have more direct control over the application. This is helpful in testing since it allows test scripts to run the application.

What are command-line arguments?

They are user inputs that are passed to the program via standard input.
They are program settings that are stored in a configuration file.
They are parameters passed to a program through the system's command line during program execution.
They are options that can be set in the program's properties window.


*/

#include <stdio.h>
int main(int argc, char *argv[]) {
    int i;
    printf("\nProgram name: %s", argv[0]);

    // if (argc < 2) {//means when no aguement is passed and argc 1 will store the program name 

    //or

    if (argc == 1){
        printf("\nNo Extra Command Line Argument Passed "
               "Other Than Program Name");


        printf("\n\nNo argument passed through command line!");
    }
    
    /*
     else {
        printf("\nArgument supplied: \n");
        for (i = 1; i < argc; i++){
            printf("%s\t", argv[i]);

            //OR

            // printf("%s\n", argv[i]);
        }

    }
*/
    // or instead of else you can have used if again 
if (argc >= 2) {
        printf("\nNumber Of Arguments Passed: %d", argc);
        printf("\n----Following Are The Command Line "
               "Arguments Passed----");
        for (int i = 0; i < argc; i++)
            printf("\nargv[%d]: %s", i, argv[i]);
    }


}

/*
// Output in Different Scenarios


// 1)Without Argument: When we run the above code and don’t pass any argument, let’s see the output our code generates.

PS C:\Sudhadocuments\C files\C learning> gcc commandLine_Arg.c

PS C:\Sudhadocuments\C files\C learning> .\commandLine_Arg.exe

Program name:C:\Sudhadocuments\C files\C learning\commandLine_Arg.exe

No argument passed through command line!

// 2)Pass single argument: When we pass the single argument separated by space but inside the double quotes or single quotes. Let’s see the output.


Properties of Command Line Arguments in C
They are passed to the main() function.
They are parameters/arguments supplied to the program when it is invoked.
They are used to control programs from outside instead of hard coding those values inside the code.
argv[argc] is a NULL pointer.
argv[0] holds the name of the program.
argv[1] points to the first command line argument and argv[argc-1] points to the last argument.
Note: You pass all the command line arguments separated by a space, but if the argument itself has a space, then you can pass such arguments by putting them inside double quotes “” or single quotes ”. 




PS C:\Sudhadocuments\C files\C learning> .\commandLine_Arg.exe "Hello Sudha"

Program name:C:\Sudhadocuments\C files\C learning\commandLine_Arg.exe
Argument supplied: Hello Sudha
PS C:\Sudhadocuments\C files\C learning>

// 3)Pass more than single argument: When we run the program by passing more than single argument, say three arguments. Let’s see the output:
PS C:\Sudhadocuments\C files\C learning> .\commandLine_Arg.exe Hello Shanaya how are you

Program name:C:\Sudhadocuments\C files\C learning\commandLine_Arg.exe
Argument supplied: Hello        Shanaya how     are     you


*/