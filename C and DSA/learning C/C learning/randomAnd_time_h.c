#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h> //sqrt() defined in it

// https://www.geeksforgeeks.org/time-h-header-file-in-c-with-examples/

/*The time.h header file contains definitions of functions to get and manipulate date and time information. It describes three time-related data types.

clock_t: clock_t represents the date as an integer which is a part of the calendar time.

time_t: time_t represents the clock time as an integer which is a part of the calendar time.

struct tm: struct tm holds the date and time which contains:
*/
/*predefined stored and it is global
struct tm {
    // seconds,  range 0 to 59
    int tm_sec;

    // minutes, range 0 to 59
    int tm_min;

    // hours, range 0 to 23
    int tm_hour;

    // day of the month, range 1 to 31
    int tm_mday;

    // month, range 0 to 11
    int tm_mon;

    // The number of years since 1900
    int tm_year;

    // day of the week, range 0 to 6
    int tm_wday;

    // day in the year, range 0 to 365
    int tm_yday;

    // daylight saving time
    int tm_isdst;
};

struct tm t;




It also contains CLOCKS_PER_SEC macro which holds the number of times does the system clock ticks per second.
*/

// Program to find the clock ticks.
int frequency_of_primes(int n)
{
    // This function checks the number of primes less than the given parameter
    int i, j;
    int freq = n - 1; //preassumption that 1 can't be composite hence let's assume there are n-1 primes and start checking from 2,
    for (i = 2; i <= n; ++i)
        for (j = sqrt(i); j > 1; --j)//square root is used to get the half possible number under which some divisors may be present //sqrt(i) used by thinking that if any number less than this number satisfy the mod ==0 then it will be composite and need not to check above this sqrt(i) because even if it will come again mod==0 then still it will be composite hence not needed to check for above sqrt(i) 
            if (i % j == 0)
            {
                --freq;
                break;
            }
    return freq;
}

int getRandomNumber(int n)
{

    srand(time(NULL)); // This function returns the calendar-time equivalent using data-type time_t.
    return rand() % n;
    // return rand(); // 22523 //22474    gives such result
}

int main()
{

    // printf("tm.tm_sec : %d\n", t.tm_sec);//predefined can't be used by defining youself , it can only be called

    // to print the date and time of the system.
    struct tm *ptr; // struct tm is predefined in C and *ptr pointer holds that datatype

    struct tm *ptr2; // it will halt the program only one pointer can be used to point the  struct tm , hence instead of using *ptr2 pointer for demonstrating , use ptr and define the new method below all the initial as it will gets updated only after finishing the old one

    printf("struct tm *ptr : %d\n", *ptr); // struct tm *ptr : 0
    printf("ptr : %d\n", ptr);             // ptr : 2768896//it changes with every call as it is a garbage value
    printf("&ptr : %d\n", &ptr);           //&ptr : 6356764//always this value
    printf("*&ptr : %d\n", *&ptr);         //*&ptr : 2768896//it will return the garbage value and that's too the same as ptr because ptr==*&ptr

    time_t t; // clocktime as an integer
    // time(&t);

    // get the current time and store it in t
    t = time(NULL);
    ptr = localtime(&t); // struct tm *__cdecl localtime(const time_t *) //localtime is predefined in tm and it takes address as pointer is mentioned
    // localtime() returns a pointer to a struct tm object that has been initialized with the time pointed to by the argument time_t.

    printf("%s", asctime(ptr)); // Sun Nov 03 13:05:30 2024 //we used this because it takes by taking struct tm variable as a parameter.

    // ptr2 = gmtime(&t);//it will halt the program hence comment it and below one will run smoothly without any halt
    // printf("%s", asctime(ptr2));

    ptr = gmtime(&t); // UTC (Coordinated Universal Time)//Sun Nov 03 08:15:37 2024
    printf("%s", asctime(ptr));


    /*
 
    struct tm *ptr : 6356868
ptr : 6356820
&ptr : 6356744
*&ptr : 6356820
Sat Apr 05 10:41:49 2025
Sat Apr 05 05:11:49 2025
   */

    // to calculate the time taken to add two numbers program.

    time_t start, end;

    start = time(NULL);
    int a, b;
    printf("Enter value of a and b to sum : ");
    scanf("%d\t%d", &a, &b); // this address is passed by user
    printf("Sum of %d and %d is %d\n",
           a, b, a + b);

    end = time(NULL);
    printf("Time taken to print sum is %.2f seconds\n", difftime(end, start));
    printf("Time taken to print sum is %.2f seconds\n", difftime(start, end)); // Time taken to print sum is -11.00 seconds //-ve because of changed order and start<end hence give -ve value
    /*
    Enter value of a and b to sum : 3 8
    Sum of 3 and 8 is 11
    Time taken to print sum is 7.00 seconds


    Note: If user gives input slowly that time also add up for total execution time as we have declared start befor scanf

    */

    // Program to find the clock ticks.

    clock_t tt;
    int f;
    tt = clock();//it will store the processor time consumed by above program
    f = frequency_of_primes(9999);
    printf("The number of primes lower"
           " than 10, 000 is: %d\n",f);//The number of primes lower than 10, 000 is: 1229
    tt = clock() - tt;//this clock() will store the pprocessor time of above , hence to find only the processor time of this prime number calculation hence we subtracted the tt which stored time above the prime function
    printf("No. of clicks %ld clicks (%f seconds).\n", tt, ((float)tt) / CLOCKS_PER_SEC);//No. of clicks 2 clicks (0.002000 seconds).

    // Program to print time as hour: minute returned by asctime() file.

    time_t rawtime;
    struct tm *timeinfo;

    // Used to store the time returned by localetime() function
    char buffer[80];

    time(&rawtime);
    timeinfo = localtime(&rawtime);

    strftime(buffer, 80,"Time is %I:%M%p.",timeinfo);

    // strftime() function stores the
    // current time as Hours : Minutes
    //%I %M and %p-> format specifier
    // of Hours minutes and am/pm respectively*/

    // prints the formatted time
    puts(buffer);//Time is 02:54PM.

    int n;
    printf("Enter the maximum number  : ");
    scanf("%d", &n); // if this scanf will take value then getRandomNumber will be called and it will be deficult to come back in main and execute remaining codes , hence it halts , hence use this below the all codes
    // getRandomNumber(n);
    printf("The random number generated is : %d\n", getRandomNumber(n));

    return 0;

/*

struct tm *ptr : 6356868
ptr : 6356820
&ptr : 6356744
*&ptr : 6356820
Sat Apr 05 11:03:47 2025
Sat Apr 05 05:33:47 2025
Enter value of a and b to sum : 2 7
Sum of 2 and 7 is 9
Time taken to print sum is 4.00 seconds
Time taken to print sum is -4.00 seconds
The number of primes lower than 10, 000 is: 1229
No. of clicks 4 clicks (0.004000 seconds).
Time is 11:03AM.
Enter the maximum number  : 7775
The random number generated is : 1109
PS C:\Sudhadocuments\C files\C learning>

*/

}