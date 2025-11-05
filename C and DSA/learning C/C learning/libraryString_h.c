#include <stdio.h>
#include <string.h>
//  c:/mingw/bin/../lib/gcc/mingw32/6.3.0/../../../../mingw32/bin/ld.exe: cannot open output file libraryString_h.exe: Permission denied //if this error occured then re run it again and open the link: c:/mingw/bin/../lib/gcc/mingw32/6.3.0/../../../../mingw32/bin/ld.exe in editor // do this again and again and re run it ... After this , it will start working.

// every string methods will update permanently not just for print 


//Array reverse

int arrayRev(int arr[],int size)//also works
// void arrayRev(int arr[],int size) //also works
// void arrayRev(int *arr,int size) //pointer will also work 
{
    // int size= sizeof(arr);
    /*
     warning: 'sizeof' on array function parameter 'arr' will return size of 'int *' [-Wsizeof-array-argument]
     int size= sizeof(arr);

     //to remove the error. we declare size seperately in parameter that takes value from mains using (int size = sizeof(arrayS) / sizeof(arrayS[0]);//6) but if pass the value inside the function with size= sizeof(arr) will give int size that is 4 , not length of string array

    */

    printf("size :%d\n",size);//size :4//error when used size= sizeof(arr) in function; //using the parameteric passed size size :6

    for(int i=0;i<size;i++){
       int temp=arr[i];
    //    wrong logic
    //    arr[i]=arr[i+1];
    //    arr[i+1]=temp;

// right logic , just used swap between left and right from end to middle
    arr[i]=arr[size-1-i]; //as indexing starts from 0 hence last element is having index (size-1) 
       arr[size-1-i]=temp;


    }
    printf("arrayRev : %s\n",arr);//arrayRev : ♣
    printf("arrayRev : %d\n",arr);//arrayRev : 6356728 //this number is not even the address but data conversion into integer
    printf("arr : %d\n",arr);//arrayRev : 6356728
    printf("&arr : %d\n",&arr);//&arr : 6356704
    printf("&arr : %x\n",&arr);//&arr : 60fee0

    //to display
     printf("arrRev :");
     for(int i=0;i<size;i++){
      
       printf("%d ",arr[i]);//arrRev :2 5 3 4 3 43
    //    printf("arrRev : %s ,",arr[i]);
    //    printf("arrRev : %c ,",arr[i]);
    }

    return 0;
    // return ;
}

int main()
{
    char s1[] = "Sudha";
    char s2[] = "Sana";
    char s3[] = "";
    printf("s1[] :%s\n", s1);//s1[] :Sudha
    printf("s2[] :%s\n", s2);//s2[] :Sana
    printf("strlen(s2) :%d\n", strlen(s2));//strlen(s2) :4
    printf("strrev(s2) :%d\n", strrev(s2));//permanently set it to this//reverse once but gives output //strrev(s2) :6356757 but to get string use puts() or %s method
    printf("strrev(s2) :%s\n", strrev(s2));//strrev(s2) :Sana
    puts(strrev(s2));//anaS
    puts(strrev(s2));//Sana
    // printf("strcat(s1,s2,s3) :%d\n", strcat(s1,s2,s3));//to many arguements error
    printf("strcat(s1,s2) :%d\n", strcat(s1,s2));//strcat(s1,s2) :6356762 this number due to %d . checnging it to %s will give string result
    printf("strcat(s1,s2) :%s\n", strcat(s1,s2));//strcat(s1,s2) :SudhaSanaSana
    
  puts(strcat(s1,s2));//SudhaSanaSana //this output is because there is no terminator

puts(strcpy(s3,strcat(s1,s2)));//SudhaSanaSanaSanaSana

printf("s1[] :%s\n", s1);//s1[] :anaSanaSanaSana
  printf("s2[] :%s\n", s2);//  s2[] :udhaSanaSanaSanaSana 
printf("s3[] :%s\n", s3);//s3[] :SudhaSanaSanaSanaSana




// Array reversal
    int arrToRev[] = {2, 5, 3, 4, 3, 43};
    int size = sizeof(arrToRev) / sizeof(arrToRev[0]);
    printf("size :%d\n",size); //size :6
    arrayRev(arrToRev,size);


    return 0;
}