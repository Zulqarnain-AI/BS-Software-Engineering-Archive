//lab 4

#include <iostream>
using namespace std;
main()
{
	
	int arr[]={3,4,5,6,7,8,9};
	int mid;
	 int x=4;
	 int low=0;
	 int high=6;
	 int count=0;
	 int loc;
	 
	 while(low<=high)
	 {
	 	mid=(low+high)/2;//3
	 	
	 	
	 	if(arr[mid]==x)
	 	{
	 		count++;
	 	loc=mid;
	 	break;
		 }
	 	
	 	
	 	
	 	if(arr[mid]<x)
	 	{
	 			
	 	low=mid+1;
		 }
	 
	 	
	 	if (arr[mid]>x)
	 	high=mid-1;
	 }
	 if(count==0)
	 cout<<"number is not found";
	 else
	 cout<<x<<"  is found at  "<<loc;
	
	
	
	
	
	
}
