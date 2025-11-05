#include <stdio.h>

// recursion is based on buffer data , it restarts those which were once initialized but without moving to final result it started another recursion ... buffer executes in the reverse order as they were created, last buffer executes first then last second last and then so on... and finally reach to first buffers

void printArray(int *A, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", A[i]);
    }
    printf("\n");
}

/*
original array :
9 1 4 14 4 15 6
*/
void merge(int A[], int mid, int low, int high) // array passed will be same as original, only the pointing index like mid,low,high changes
{
    printf("in merge function defination the value of low = %d ,mid = %d ,high = %d \n", low, mid, high);
    int i, j, k, B[100];

    printf("the elements of passed array is:\n");

    /*
        for (int i = 0; i < sizeof(A); i++)//sizeof(A)//it will take size of pointer hence sizeof(A)=4 which is size of int *
        {
            printf("%d \t ", A[i]);
        }
        printf("\n");

        */

    i = low;
    j = mid + 1;
    k = low;//used for actual array index to update there at very start or first call of merge low is 0 and this position is even not get finalized in one call of merge ... it uses buffer data to finalize at end

    printf("in merge function after defining i,j,k defination the value of i = %d ,j = %d ,k = %d \n", i, j, k);

    /*
    original array :
    9 1 4 14 4 15 6
    */

    while (i <= mid && j <= high)
    {
        printf("inside while (i <= mid && j <= high) loop of merge\n");

        if (A[i] < A[j])
        {
            B[k] = A[i];
            printf("inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge\n");
            i++;
            k++;
        }
        else
        {
            printf("inside while (i <= mid && j <= high) else loop of merge\n");

            B[k] = A[j];
            j++;
            k++;
        }
    }
    while (i <= mid)
    {
        printf("inside while (i <= mid )\n");
        B[k] = A[i];
        k++;
        i++;
    }

    while (j <= high)
    {
        printf("inside while (j <= high )\n");

        B[k] = A[j];
        k++;
        j++;
    }
    for (int i = low; i <= high; i++)
    {
        printf("inside for (int i = low; i <= high; i++)\n");

        A[i] = B[i];
    }

    printf("when exiting merge then low= %d , mid= %d and high= %d \n", low, mid, high);
}

int count = 0;
void mergeSort(int A[], int low, int high, int n)
{
    // int mid; //gives garbage value
    int mid = 0; // gives garbage value

    if (low < high) //
    {
        count++;
        printf("count of first mergesort and mid is initialized with 0 every iteration then update below: %d ,just below if (low<high) the value of low = %d ,mid = %d ,high = %d \n", count, low, mid, high);
        mid = (low + high) / 2;

        printf("count of first mergesort: %d ,after mid defination the value of low = %d ,mid = %d ,high = %d \n", count, low, mid, high);

        mergeSort(A, low, mid, n); // recursion 3 times till low and mid become equal after updation of mid in every iteration //if it try to recall it then it will not execute and last time code line is returned that is when last time mergesort is used

        count++;                                                                                                                                    // start with 4
        printf("count of second mergesort : %d ,just below first merge sort the value of low = %d ,mid = %d ,high = %d \n", count, low, mid, high); // count of second mergesort : 4 ,just below first merge sort the value of low = 0 ,mid = 0 ,high = 1//only one time and it holds the lat value of low,mid and high low = 0 ,mid = 0 ,high = 1 hence next mergeSort(A, mid + 1, high, n) will not iterate as for it mid+1 will be 1 and high is 3

        mergeSort(A, mid + 1, high, n); // not iterate any more as broken at the very first merge which takes this to such that //at next when merge was taken directly

        printf("just after second merge sort the value of low = %d ,mid = %d ,high = %d \n", low, mid, high);
        // just after  merge the value of low = 0 ,mid = 0 ,high = 1

        merge(A, mid, low, high); // call merge
        printf("just after  merge the value of low = %d ,mid = %d ,high = %d \n", low, mid, high);

        printArray(A, n); // smallest element breaks upto two element in it , merge take first 2 elements to compare at the very first

        /*
just after  merge the value of low = 0 ,mid = 0 ,high = 1
1 9 4 14 4 15 6
        */

        //    this merge will give first two element sorted and along with that it will continue from the very last time  value of low = 0 ,mid = 1 ,high = 3 just before for low = 0 ,mid = 0 ,high = 1 completed //we need not to update low, mid or high ... it will search for buffer values which existed once but not reached the final conclusion//hence mergesort(0,1,3) will restart then back ...
    }
}

int main()
{
    int A[] = {9, 1, 4, 14, 4, 15, 6};
    int n = sizeof(A) / sizeof(A[0]);
    printf("original array :\n");
    printArray(A, n);

    int low = 0;
    int high = n - 1;
    mergeSort(A, low, high, n);
    printf("sorted array :\n");
    printArray(A, n);
    return 0;
}

/*
original array :
9 1 4 14 4 15 6
sorted array :
1 4 4 6 9 14 15


original array :
9 1 4 14 4 15 6
count of first mergesort and mid is initialized with 0 every iteration then update below: 1 ,just below if (low<high) the value of low = 0 ,mid = 0 ,high = 6
count of first mergesort: 1 ,after mid defination the value of low = 0 ,mid = 3 ,high = 6
count of first mergesort and mid is initialized with 0 every iteration then update below: 2 ,just below if (low<high) the value of low = 0 ,mid = 0 ,high = 3
count of first mergesort: 2 ,after mid defination the value of low = 0 ,mid = 1 ,high = 3//this value will remain in buffer and restart when lower one completes it task


count of first mergesort and mid is initialized with 0 every iteration then update below: 3 ,just below if (low<high) the value of low = 0 ,mid = 0 ,high = 1
count of first mergesort: 3 ,after mid defination the value of low = 0 ,mid = 0 ,high = 1
count of second mergesort : 4 ,just below first merge sort the value of low = 0 ,mid = 0 ,high = 1
just after second merge sort the value of low = 0 ,mid = 0 ,high = 1

in merge function defination the value of low = 0 ,mid = 0 ,high = 1//merge is called at this point
the elements of passed array is:
in merge function after defining i,j,k defination the value of i = 0 ,j = 1 ,k = 0
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) else loop of merge
inside while (i <= mid )
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
when exiting merge then low= 0 , mid= 0 and high= 1
just after  merge the value of low = 0 ,mid = 0 ,high = 1
1 9 4 14 4 15 6
count of second mergesort : 5 ,just below first merge sort the value of low = 0 ,mid = 1 ,high = 3
count of first mergesort and mid is initialized with 0 every iteration then update below: 6 ,just below if (low<high) the value of low = 2 ,mid = 0 ,high = 3
count of first mergesort: 6 ,after mid defination the value of low = 2 ,mid = 2 ,high = 3
count of second mergesort : 7 ,just below first merge sort the value of low = 2 ,mid = 2 ,high = 3
just after second merge sort the value of low = 2 ,mid = 2 ,high = 3
in merge function defination the value of low = 2 ,mid = 2 ,high = 3
the elements of passed array is:
in merge function after defining i,j,k defination the value of i = 2 ,j = 3 ,k = 2
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge
inside while (j <= high )
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
when exiting merge then low= 2 , mid= 2 and high= 3
just after  merge the value of low = 2 ,mid = 2 ,high = 3
1 9 4 14 4 15 6
just after second merge sort the value of low = 0 ,mid = 1 ,high = 3
in merge function defination the value of low = 0 ,mid = 1 ,high = 3
the elements of passed array is:
in merge function after defining i,j,k defination the value of i = 0 ,j = 2 ,k = 0
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) else loop of merge
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge
inside while (j <= high )
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
when exiting merge then low= 0 , mid= 1 and high= 3
just after  merge the value of low = 0 ,mid = 1 ,high = 3
1 4 9 14 4 15 6
count of second mergesort : 8 ,just below first merge sort the value of low = 0 ,mid = 3 ,high = 6
count of first mergesort and mid is initialized with 0 every iteration then update below: 9 ,just below if (low<high) the value of low = 4 ,mid = 0 ,high = 6
count of first mergesort: 9 ,after mid defination the value of low = 4 ,mid = 5 ,high = 6
count of first mergesort and mid is initialized with 0 every iteration then update below: 10 ,just below if (low<high) the value of low = 4 ,mid = 0 ,high = 5
count of first mergesort: 10 ,after mid defination the value of low = 4 ,mid = 4 ,high = 5
count of second mergesort : 11 ,just below first merge sort the value of low = 4 ,mid = 4 ,high = 5
just after second merge sort the value of low = 4 ,mid = 4 ,high = 5
in merge function defination the value of low = 4 ,mid = 4 ,high = 5
the elements of passed array is:
in merge function after defining i,j,k defination the value of i = 4 ,j = 5 ,k = 4
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge
inside while (j <= high )
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
when exiting merge then low= 4 , mid= 4 and high= 5
just after  merge the value of low = 4 ,mid = 4 ,high = 5
1 4 9 14 4 15 6
count of second mergesort : 12 ,just below first merge sort the value of low = 4 ,mid = 5 ,high = 6
just after second merge sort the value of low = 4 ,mid = 5 ,high = 6
in merge function defination the value of low = 4 ,mid = 5 ,high = 6
the elements of passed array is:
in merge function after defining i,j,k defination the value of i = 4 ,j = 6 ,k = 4
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) else loop of merge
inside while (i <= mid )
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
when exiting merge then low= 4 , mid= 5 and high= 6
just after  merge the value of low = 4 ,mid = 5 ,high = 6
1 4 9 14 4 6 15
just after second merge sort the value of low = 0 ,mid = 3 ,high = 6
in merge function defination the value of low = 0 ,mid = 3 ,high = 6
the elements of passed array is:
in merge function after defining i,j,k defination the value of i = 0 ,j = 4 ,k = 0
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) else loop of merge
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) else loop of merge
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge
inside while (i <= mid && j <= high) loop of merge
inside while (i <= mid && j <= high) if (A[i] < A[j]) loop of merge
inside while (j <= high )
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
inside for (int i = low; i <= high; i++)
when exiting merge then low= 0 , mid= 3 and high= 6
just after  merge the value of low = 0 ,mid = 3 ,high = 6
1 4 4 6 9 14 15
sorted array :
1 4 4 6 9 14 15
PS C:\Sudhadocuments\DSA\DSA>
*/