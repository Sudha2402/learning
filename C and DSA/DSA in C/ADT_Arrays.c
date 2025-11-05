#include <stdio.h>
#include <stdlib.h>

struct myArray
{
    // int* data;
    int size;
    int used_size;
    int *ptr;
};

void create_Array(struct myArray *arr, int t_size, int u_size)
{
    // struct myArray* arr = (struct myArray*)malloc(sizeof(struct myArray));
    // arr->data = (int*)malloc(10 * sizeof(int));
    arr->size = t_size;
    arr->used_size = u_size;
    arr->ptr = (int *)malloc(t_size * sizeof(int));
    return;
}

void display(struct myArray *arr)
{ // here u_size is not passed because u_size is directly affected to arr in created function

    printf("arr elements are :\n");
    // for (int i = 0; i < u_size; i++) 
    
    /*
     error: 'u_size' undeclared (first use in this function)
     for (int i = 0; i < u_size; i++)
                         ^~~~~~
    */

   for (int i = 0; i <arr->used_size; i++) 
//    for (int i = 0; i <used_size; i++) 
    {

        /*
         error: 'used_size' undeclared (first use in this function)
     for (int i = 0; i < used_size; i++)
                         ^~~~~~~~~
        */
    //    printf("%d ", *(arr->ptr + i));//check
        printf("arr->ptr : %d\n",arr->ptr);//arr->ptr : 16716904 same every iteration as it the base address of ptr array but it is changed in every run code but internal iterations will be same . //arr->ptr : 16192616
        printf("arr->ptr[%d] : %d\n",i, arr->ptr[i]);//arr->ptr[i] : 16717320 //it is the garbage value as if not initialized



        /*If any string is entered in place of integer then it will take the last entered value of array in all index after that proper index

Enter the value of arr[0] :
34 t4
arr->ptr[0] : 34
Enter the value of arr[1] :
arr->ptr[1] : 34
Enter the value of arr[2] :
arr->ptr[2] : 34
Enter the value of arr[3] :
arr->ptr[3] : 34

        */
    }

 return;
 
}

void set_Value(struct myArray *arr)
{
    printf("set_Value :\n");
    int data;
    for (int i = 0; i < arr->used_size; i++)
    {
        printf("Enter the value of arr[%d] : \n", i);
        scanf("%d", &data);
        arr->ptr[i] = data;
        printf("arr->ptr[%d] : %d\n",i, arr->ptr[i]);

        /*
Enter the value of arr[0] :
4 3
arr->ptr[i] : 4
Enter the value of arr[1] :
arr->ptr[i] : 3

//as there is gap between 1 and 3 input in that case it takes onlt the first number before gap in ptr[i] and 3 in ptr[i+1] 
        */
    }

     return;
}

int main()
{

    // struct myArray *array;//* should not be used 
    struct myArray array;//
    create_Array(&array, 12, 4);
    display(&array);
    set_Value(&array);
    display(&array);

/*
arr elements are :
arr->ptr : 16192616
arr->ptr[i] : 16193032
arr->ptr : 16192616
arr->ptr[i] : 16194192
arr->ptr : 16192616
arr->ptr[i] : 1969450852
arr->ptr : 16192616
arr->ptr[i] : 1953391981
set_Value :
Enter the value of arr[0] :
4
arr->ptr[i] : 4
Enter the value of arr[1] :
6
arr->ptr[i] : 6
Enter the value of arr[2] :
3
arr->ptr[i] : 3
Enter the value of arr[3] :
6
arr->ptr[i] : 6
arr elements are :
arr->ptr : 16192616
arr->ptr[i] : 4
arr->ptr : 16192616
arr->ptr[i] : 6
arr->ptr : 16192616
arr->ptr[i] : 3
arr->ptr : 16192616
arr->ptr[i] : 6
*/

    printf("\n");

    return 0;
}