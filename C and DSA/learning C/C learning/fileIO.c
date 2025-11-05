// C program to Open a File, Write in it, And Close the File
#include <stdio.h>
#include <string.h>
#include <stdlib.h> //contains exit(0)

// NOTE: all the unwanted output will be just because of the file which is being read or write hence other things like size should be as much as needed is good but it would not create unwanted output even if size is given more than need

// try to keeo the fread in block so that it donot affect the lower outputs

// all the unwanted output is because of size mismatched 
// the file that has to perform I/O should have proper size defined and known
// all the characters will be taken as 1 byte even white space and end of line will take 2 bytes




// text file

// "C:\Windows\WinSxS\x86_netfx4-attributionfile_b03f5f7f11d50a3a_4.0.15912.0_none_bfd0663f65a3dd07\ThirdPartyNotices.txt"
// binary file

// To read all values of n1, n2 & n3 of the bin, we are using fscanf()

struct threeNum
{
    int n1, n2, n3;
};

int main()
{

    // Declare the file pointer
    FILE *filePointer;

    // Get the data to be written in file

    // char dataToBeWritten[50] = "Sudha is very passionate about her work .She is a determined person having a great vision";

    /*
    fileIO.c: In function 'main':
fileIO.c:20:32: warning: initializer-string for array of chars is too long
     char dataToBeWritten[50] = "Sudha is very passionate about her work .She is a determined person having a great vision";
                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    */

    //    increase the size of dataToBeWritten[50]

    char dataToBeWritten[] = "//Sudha is very passionate about her work .She is a determined person having a great vision"; // since it's c file hence we added / to comment

    // Open the existing file GfgTest.c using fopen()
    // in write mode using "w" attribute
    filePointer = fopen("FileTryInFileIO.c", "w"); // it removes all the existing content but thereafter every fput will append the data

    // Check if this filePointer is null
    // which maybe if the file does not exist but as it is in write mode it will create the file//it is for write pointer
    if (filePointer == NULL)
    {
        printf("FileTryInFileIO.c file failed to open.");
    }
    else
    {

        printf("The FileTryInFileIO.c is now opened.\n");

        // Write the dataToBeWritten into the file
        if (strlen(dataToBeWritten) > 0)
        {

            // writing in the file using fputs()
            fputs(dataToBeWritten, filePointer);   // overwrite all the content of initial file as it is opened in write mode
            fputs("\n", filePointer);              // it is like append a \n in code not overwrite , it is for terminating
            fputs("dataToBeWritten", filePointer); // it is like append a \n in code not overwrite , it is for terminating
            fputs(dataToBeWritten, filePointer);   // it is like append a \n in code not overwrite , it is for terminating
            // fputs(, filePointer); //it is like append a \n in code not overwrite , it is for terminating
        }

        // Closing the file using fclose()
        fclose(filePointer);

        printf("Data successfully written in file "
               "FileTryInFileIO.c\n");
        printf("The FileTryInFileIO.c is now closed.\n");

        /*
        The file is now opened.
        Data successfully written in file FileTryInFileIO.c
        The file is now closed.
        */
    }

    // This program will create a file named FileTryInFileIO.c if not exist in the same directory as the source file which will contain the following text:

    printf("\n\n");

    FILE *fileReadPointer;
    fileReadPointer = fopen("FileReadTryInFileIO.c", "r");

    char str[80];



    // checking if the file is opened successfully

    if (fileReadPointer == NULL)
    {
        printf("The file is not opened. The program will "
               "now exit.");
        exit(0); // Exit Success: Exit Success is indicated by exit(0) statement which means successful termination of the program, i.e. program has been executed without any error or interrupt.

        // The file is not opened. The program will now exit.

        // it satisfy if condition when file doesnot exist because read mode can't create a file when in doesnot exists that write mode does

        // the rest of the codes will not execute if it gets into if condition and exit the program

        // we get the below statement when this file donot exist
        // The file is not opened. The program will now exit.
    }
    else
    {
        printf("The file is opened in read mode\n");
       

        // The file is opened in read mode//as we have created the file that has to be read

        if(fgets(str, 80, fileReadPointer) != NULL)//fgets is used in if to test if string is present in it 
  {
    puts(str);//it will print first 80 bytes 
  }
  fclose(fileReadPointer);
    }

    printf("\n\n");

    int a;
    printf("enter value to read :");
    scanf("%*s %d", &a); // The %*s in scanf is used to ignore some input as required. In this case, it ignores the input until the next space or newline. Similarly, if you write %*d it will ignore integers until the next space or newline.
    printf("Input value read : a=%d\n", a);

    /* Here 5434343534 was ignores and only 4553445 is taken only because it gets into new line  after 5434343534 and scanf() stops reading when it encounters a new line.


    enter value to read :5434343534
4553445
Input value read : a=4553445

// OR with space

enter value to read :fdfsdf 2
Input value read : a=2

//OR even if string is not enter , it will take any non whitespace as string and wait for next string to print

enter value to read :1 2
Input value read : a=2



    */

    printf("\n");

    // int fscanf(FILE *ptr, const char *format, ...)

    FILE *ptr = fopen("abc.txt", "r");
    if (ptr == NULL)
    {
        printf("no such file.");
        return 0;
    }

    /* Assuming that abc.txt has content in below
       format
       NAME    AGE   CITY
       abc     12    hyderabad
       bef     25    delhi
       cce     65    bangalore */

    char buf[100]; // it will give banglore again and again due to it's size and it will print for every repaint hence limit the length of buf //

    // char buf[50];

    // printf("fscanf  : %d \n",fscanf(ptr, "%*s %*s %s ", buf));//fscanf  : 1 //it will put the value into buf once and now ptr will point to next line each time fscanf(ptr, "%*s %*s %s ", buf) is shown , even for printing//fscanf(ptr, "%*s %*s %s ", buf) returned 1 means it has successfully assigned a value

    // Note: don't print any pointer or any character thet will later on store the data from anoter file by reading otherwise if print is used then it will print it repeadly after each repaint in below codes.

    // printf("buf outside the while loop : %s\n", buf);//buf outside the while loop : √

    while (fscanf(ptr, "%*s %*s %s ", buf) == 1) // this while loop will take the %s once beacuse it has used the expression and buf always updates from the last point //hence if once updated to city then next time it check for hydrabad //whatever fsacnf get , it is storing in buf and printin it

    // while (fscanf(ptr, "%*s %*s %s ", buf) != 1) //it will keep printing city
    { // this condition will check for all the time till fscanf get a string  as fscanf returns 1 when it encounter the data // as we have learned earlier %*s %*s is used to ignore string array two times , one string array finishes when any space is encountered and till new character is not encounted (it do not take any space as charater and it keep ignoring as nothing , but string ignore is activated only when it encounters character ) .After ignoring two strings in a line it stores the third string in buf variable, buf is declared char datatype to store %s value //

        // printf("fscanf  : %d \n",fscanf(ptr, "%*s %*s %s ", buf));//fscanf  : 1 //delhi as fscanf used 3rd time and as this will return one because it has assigned delhi to buf now, hence it will restart the while loop and ther in condition it will loose bangalore and next time fscanf  : -1 and then printing  fscanf(ptr, "%*s %*s %s ", buf) after -1 will give banglore because it updates from the last point //for hyderabad
        printf("%s\n", buf);
        // fclose(ptr);//this will not let the while loop to execute for second iteration hence it will print delhi again and again

        // as we already know when while loop is applied directly on some address data like by using pointer then it do not need any increment or decrement for next iteration of while loop
    }

    // must to close the file otherwise
    fclose(ptr);

    printf("\n\n");

    // https://www.reddit.com/r/C_Programming/comments/10crrku/need_help_with_binary_files_structures_and_fread/

    // check above link to handle binary file

    // fread() function to read the content of binary file into an array.

    FILE *fileT;
    // int buffer[5];//it gives axtra v symbol
    int buffer[0]; // it works also

    // Open the binary file for reading
    fileT = fopen("input.bin", "rb");
    if (fileT == NULL)
    {

        perror("Error opening file"); // The perror() function prints an error message to stderr . If string is not NULL and does not point to a null character, the string pointed to by string is printed to the standard error stream, followed by a colon and a space.

        // Error opening file: No such file or directory //this output we will get and that's too like normal output black gray not in red color

        return 1; // exit the int main() hence below codes will not execute
    }

    // Read the integers from the file into the buffer

    // fread(buffer, sizeof(int), 5, fileT);
    // fread(buffer, 1, 5, fileT);//Element 1: 10, 2lore
    // fread(buffer, 2, 5, fileT);//Element 1: 10, 20, 30`
    // fread(buffer, 18, 1, fileT);
    // fread(buffer, 3, 5, fileT);//Element 5: 10, 20, 30, 40,u
    // fread(buffer, 2, 6, fileT);
    // fread(buffer, 3, 6, fileT);
    // fread(buffer, 4, 6, fileT);//Element 5: 10, 20, 30, 40, 50

    // only buffer and &buffer will give the same result because direct address is affected or element buffer is affected and all the no updates will be made because whole file is read at once hence bytes wise updation is not required hence  buffer and &buffer will give same result
    // fread(&buffer, sizeof(int),5, file);
    // Print the integers that were read

    for (int i = 0; i < 5; i++)
    {

        fread(buffer, sizeof(int), 5, fileT);//Element 1: 10, 20, 30, 40, 50 // put fread in for loop or in any type of block otherwu=ise it will affect the other codes also
        /*
Element 1: 10, 20, 30, 40, 50
Element 2:
Element 3:
Element 4:
Element 5:

as the fread inside the for loop hence when it finishes reading 20 bytes as ((sizeof(int)=4 )*5=20),thereafter it is left with nothing to read
        */
        // printf("Element %d: %d\n", i + 1, buffer[i]); //it gives address
        /*
        Element 1: 539766833
        Element 2: 539766834
        Element 3: 539766835
        Element 4: 539766836
        Element 5: 2109493
        */

        // printf("Element %d: %s\n", i + 1, buffer[i]);//halt here as %s used

        // printf("Element %s: %d\n", i + 1, buffer[i]);//halt here as %s used

        // printf("Element %d: %d\n", i + 1, &buffer); // 6356508 is address of buffer and always

        // printf("Element %d: %s\n", i + 1, &buffer); // 6356508 is address of buffer and always if %d used //Element 1: 10, 20, 30, 40, 50  , if %s is used

        // printf("Element %d: %d\n", i + 1, buffer); // 6356508 is address buffer always
        printf("Element %d: %s\n", i + 1, buffer); // Element 1: 10, 20, 30, 40, 50 , when %s is used
        // fclose(file);
    }

    // Close the file

    fclose(fileT);

    /*
Element 1: 539766833
Element 2: 539766834
Element 3: 539766835
Element 4: 539766836
Element 5: 16265269
    */

    // binTry.c file contains the detailed explaination of below code

    // To read all values of n1, n2 & n3 of the bin, we are using fscanf()
    printf("\n\n");

    // struct threeNum num;
    struct threeNum *num;

    printf("sizeof(struct threeNum) : %d bytes\n", sizeof(struct threeNum)); // sizeof(struct threeNum) : 12 bytes //this size of because of 4 int defined in it

    FILE *fptr;

    fptr = fopen("program.bin", "rb");

    printf("fopen('program.bin', 'rb) :%s \n\n", fptr = fopen("program.bin", "rb")); // fopen('program.bin', 'rb) :
    // it gives nothing

    if ((fptr = fopen("program.bin", "rb")) == NULL)
    // if (fptr== NULL)//also works
    {
        printf("Error! opening file"); // Error! opening file
        // Program exits if the file pointer returns NULL.

        exit(1); // 1 or EXIT_FAILURE: The statements exit(1) and exit(EXIT_FAILURE) mean that the program terminated abruptly with an error and no below codes will execute but all the above code till this will be executed
    }

    for (int n = 1; n <= 5; ++n) // executes 4 times
    {
        // fread(&num, sizeof(struct threeNum), 1, fptr);
        // fread(&num, sizeof(struct threeNum), 0, fptr);//&num : ╨+■
        // fread(&num, 12, 1, fptr);//&num : ╨+■
        /*

&num : n1  n2  n3
30, 40, 50
&num : 1   5   6
30, 40, 50
&num : 2   10  11
30, 40, 50
&num : 3   15  16
30, 40, 50
&num : 4   20  21
30, 40, 50

*/
        // fread(&num, 4, 1, fptr);//
        fread(&num, 12, 1, fptr); //

        // here 1 is the count for number of 12 bytes(2 bytes for line terminator at the end and oter each character + space all takes 1 byte) to be read from file pointed by the pointer  // here as we need updation hence &num is used otherwise num would not keep the last value

        // printf("n1: %d\tn2: %d\tn3: %d\n", num.n1, num.n2, num.n3);//it gives only address not the values

        printf("&num : %s \n", &num); // return 12 bytes at a time //above reault would also have given the same output only the problem was because of fread outside the for loop above 
        /*
&num : n1  n2  n3

&num : 1   5   6

&num : 2   10  11

&num : 3   15  16

&num : 4   20  21
        */

        // printf("&num : %d \n", &num); //return 12 bytes at a time //it gives addresses of num

        /*
        &num : 6356516
        &num : 6356516
        &num : 6356516
        &num : 6356516
        */

        // fread(num, sizeof(struct threeNum), 1, fptr);//halt and exit

        // printf("num : %s \n\n", num); // num : 6356516, it will terminate after printing this address only once
    }

    fclose(fptr);

    /*
    n1: 538980718   n2: 846077984   n3: 538976288
    n1: 168637294   n2: 538976305   n3: 538981664
    n1: 221650976   n2: 538980874   n3: 808525856
    n1: 538976288   n2: 168636721   n3: 538976307
    */

    printf("End\n");

    return 0;
}