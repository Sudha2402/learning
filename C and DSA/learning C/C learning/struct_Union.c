#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Note: any format specifier can be used to print any datatype if it can be implicitly chaged into that form. eg , instead of %s , if % d is used then it implicitly convert string to int if possible or return something like address type...but not address exactly, but data conversion into integer, it is unknown hence use exact format specifier for proper result


struct student
{
    int rollno;
    char name[20];
    float marks;

}; // don't forget ; at end because this struct is just like using int num; in datatype

// you can't use this struct data type without alias name.

struct student s1, s2, s3;
struct student *s4;//this type of pointer is used to pass the pointer as parameter in any function and then use (*s4).rollno=5; or s4->rollno=5; inside the function then no error will be shown otherwise below are the errors if not used in function

// printf("pointer s4 : %d",*s4);//error//expected a type specifier
// printf("pointer s4 : %d",s4);//error variable "s4" is not a type name
// *s4.rollno=5;//error that expected colon
// s4.rollno=5;//error that expected colon
// s4->rollno=5;//error that expected colon


void createArray(struct student *s4){

// (*s4).rollno = 1;//bracket is must otherwise it gives error.
// (*s4).rollno = 5;//bracket is must otherwise it gives error.
(*s4).marks= 15;//it gives s4->marks : 0 on printing
// (*s4).marks= 15.7;
    printf("*s4 : %d\n" , *s4);//it shows the very first declaration in *s4 that is rollno but if marks inilialised first then it will come first //*s4 : 1//5  //it give 0 when (*s4).marks is used with %d
    printf("*s4 : %f\n" , *s4);//it shows the very first declaration in *s4 that is rollno but if marks inilialised first then it will come first //*s4 : 1//5  //it give 0 when (*s4).marks is used with %d
    printf("*s4 : %d\n" , *s4);//*s4 : 1//5
    printf("&s4 : %d\n" , &s4);//&s4 : 6356672
    printf("s4->rollno : %d\n" , s4->rollno);//s4->rollno :1//5
    printf("s4->marks : %d\n" , s4->marks);//s4->marks : 0 //this output is due to %d
    printf("s4->marks : %f\n" , s4->marks);//s4->marks : 15.000000//s4->marks : 15.700000 , give correct answer only when %f is used
    // printf("*s4->rollno : %d\n" , *s4->rollno);//error
    printf("(*s4).rollno : %d\n" , (*s4).rollno);//(*s4).rollno) : 1//5
    printf("(*s4).marks : %d\n" , (*s4).marks);//(*s4).rollno) : 1//5
    
/* 
if (*s4).rollno = 5;
*s4 : 5
&s4 : 6356672
s4->rollno : 5
(*s4).rollno : 5
*/


    s4->rollno = 1;

    //or
    // *s4.rollno = 1;//expression must have struct or union type but it has type "struct student *
    (*s4).rollno = 1;//bracket is must otherwise it gives error.


}

// struct *s5;//error expected a type specifier

// void createArray(struct *s5){
    // s5->rollno = 1;
    //or
    // *s4.rollno = 1;//expression must have struct or union type but it has type "struct student *
// }

//  printf("pointer s4 : %d",*s4.rollno);//error

struct employees
{
    int employee_no;
    char name[20];
    float sallery;

} emp; // it will let you to define only one emp not many hence use e1,e2,e3... so on for all employes //if e1,e2,e3 is not used in place of emp in this declaration then use it in seperate line to define many employees

// struct employee emp1,emp2,emp3; //this is correct way to define many employees but we get error as  error: storage size of 'emp1' isn't known if employee is used instead of employees
struct employees emp1, emp2, emp3; // this is  correct

// emp emp4,emp5,emp6; //error that emp is not a datatype , for using this use typedef in struct defination as shown below but if typedef is not used then declare it here at start
// typedef emp emp4,emp5,emp6;//error //emp can't be used in typedef as emp is itself alias name for datatype name

typedef struct employees emp4, emp5, emp6; // not correct way to declare many employees using typedef as it only updates the name of struct employees to these name , hence it can't be used as  emp4.employee_no = 4; because struct employees.employee_no = 4; can't be defined 

typedef struct staff
{
    int staff_no;
    char name[20];

} staffmember;

staffmember stf1, stf2, stf3; // valid as typedef is used in struct defination //it can be used as stf1.staff_no=1; because staffmember.staff_no=1; is valid typedef here will change the name of whole structure used with alias staffmember , this new stf1, stf2, stf3 are also alias.

int main()
{
    // struct student rollno=1;//error //you can't use this struct data type without alias name.
    // struct student student.rollno=1;//error //you can't use . for assigning values in declaration only , is used to declare many alias

    // to assign values to the member of student
    s1.rollno = 1;
    printf("s1.rollno : %d\n", s1.rollno); // s1.rollno : 1
    strcpy(s1.name, "Sudha");              // only value way to put the string value in struct name
    // s1.name="Sudha"; //error as string is taken in arrat from
    // s1.name[]= {"Sana"}; //error
    // s1.name[]= "Sana"; //error

    printf("s1.name : %s\n", s1.name); // s1.name : Sudha //don't forget %s
    s1.marks = 85.5;
    printf("s1.marks : %f\n", s1.marks); // s1.marks : 85.500000
    s1.marks = 95.5;                     // to update the values
    printf("s1.marks : %f\n", s1.marks); // s1.marks : 95.500000

    emp.employee_no = 1;
    printf("emp.employee_no : %d\n", emp.employee_no); // emp.employee_no : 1
    // strcpy(emp.name,"Sudha"); //only value way to put the string value in struct
    emp.name[0] = 'S';
    emp.name[1] = 'h';
    emp.name[1] = 'h'; // it updates index value
    emp.name[2] = 'a';
    emp.name[3] = 'n';
    emp.name[4] = 'a';
    emp.name[5] = 'y';
    emp.name[6] = 'a';
    printf("emp.name : %s\n", emp.name); // emp.name : Shanaya

    // emp.name[6]= {"S","a","n","a","\0"};//error

// emp4.employee_no = 4;//error


    // Typedef
    // Typedef is a keyword in C, C++, and Objective-C that allows users to create a new name for an existing data type. It's commonly used when the names of user-defined data types are too complicated to use in programs.
    //  this typedef can be used with any datatype to change the name

    typedef int *intpointer; // int *intpointer , * is for int but if it is joined with intpointer then it does not means it is with intpointer , it is taken as (int *)intpointer, * is always with datatype not the pointer name , even if written with name then it will not show errors , it will implicitly take it in int (*intpointer) form like datatype + (pointer pointer_name)

    // NOTE: datasize always like (cast-type*) then this bracket will work for defining the size of datatype like int* 

    intpointer a, b; // int * for both
    int c = 40;
    a = &s1.rollno;
    printf("&s1.rollno : %d\n", a); //&s1.rollno : 4218988
    b = &emp.employee_no;
    printf("&emp.employee_no : %d\n", b); //&emp.employee_no : 4219204

    int *d, e; // int * for a only as it will be taken as int (* a), b then name very first after * with one space is taken as pointer and other is taken as int pure int b , b does not has to do anything with * and &value will be error
    // d = 5;////d : 5
    d = &s1.rollno; // d : 4218988
    // e = 6;//e : 6
    // e = &s1.rollno;
    /*Error:as implicit conversion
    structure.c:91:7: warning: assignment makes integer from pointer without a cast [-Wint-conversion]
     e = &s1.rollno;
       ^
    */
    // e : 4218988 as output after taking address as pointer and due to assignment , it implicitly convert it to integer and address is converted to integer and we get the output ....You can also think it as %d is used to print somethin string then it implicitly convert the string to integer and return tthe output.
    printf("d : %d\n", d);
    printf("d : %x\n", d); // d : 40606c //address in hexadecimal takes %x
    printf("e : %d\n", e);

    typedef int *intpointerAdd;
    intpointerAdd addrollno, addname, addmarks;
    addrollno = &s1.rollno; // gives no warning as it is of integer type

    addname = &s1.name; // it gives warning as int* is used but name is a char datatype

    /*
    warning: assignment from incompatible pointer type [-Wincompatible-pointer-types]
    addname = &s1.name;
            ^
   */

    addmarks = &s1.marks;
    
    printf("addrollno : %d\n", addrollno); // addrollno : 4218988 //same addres as given above using  d = &s1.rollno; // d : 4218988
    printf("addname : %d\n", addname);     // addname : 4218992 //it is address but in decimal form not hexadecimal
    printf("addmarks : %d\n", addmarks);   // addmarks : 4219012

    // in struct all the addresses of members are different you can check it by below codes

    printf("&s1.rollno : %x\n", &s1.rollno); //&s1.rollno : 40606c
    printf("&s1.rollno : %d\n", &s1.rollno); //&s1.rollno : 4218988
    printf("&s1.name : %x\n", &s1.name);     //&s1.name : 406070
    printf("&s1.name : %d\n", &s1.name);     //&s1.name : 4218992
    printf("&s1.marks : %x\n", &s1.marks);   //&s1.marks : 406084

    // ------------------------------------------------------------------------------------------------
    // UNION

    union Employees_Union
    {
        int employee_no;
        char name[20];
        float sallery;
    } e10, e11;

    e10.employee_no = 10;
    printf("employee_no : %d\n", e10.employee_no); // employee_no : 10 //after this as e10.name will take this memory location then e10.employee_no will not give 10 again as it would be updated

    e10.name[0] = 'S';
    e10.name[1] = 'a';
    e10.name[2] = 'n';
    e10.name[3] = 'a';
    e10.name[4] = '\0';
    printf("e10.name : %s\n", e10.name); // e10.name : Sana

    e10.sallery = 45543;

    printf("employee_no : %d\n", e10.employee_no);       // employee_no : 1194452736//it will not give 10 as it is updated by below members
    printf("&e10.employee_no : %x\n", &e10.employee_no); // employee_no : 60feec
    printf("&e10.name : %x\n", &e10.name);               // name : 60feec
    printf("&e10.sallery : %x\n", &e10.sallery);         // sallery : 60feec

    printf("&e11.employee_no : %x\n", &e11.employee_no); //&e11.employee_no : 60fed8
    printf("&e11.name : %x\n", &e11.name);               //&e11.name : 60fed8
    printf("&e11.sallery : %x\n", &e11.sallery);         //&e11.sallery : 60fed8

    // Hence we can conclude that address of members are same for one alias but another alias have different address but all it;s meber have same address.

    printf("employee_no : %d\n", e10.employee_no); // employee_no : 1194452736
    printf("e10.name : %s\n", e10.name);           // e10.name :             //all blank
    printf("e10.sallery : %f\n", e10.sallery);     // e10.sallery : 45543.000000

    // due to shared memory location , only the last value at that location will give proper result and all the above will be updated , to get the result we use one member just after update it and it should be before the last update made




// pointer as parameter
createArray(&s3);





    return 0;
}