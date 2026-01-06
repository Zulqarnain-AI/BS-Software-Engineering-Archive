							//lab5-5

#include<iostream>
using namespace std;

int stack[100];
int top=-1;
void push(int);
void consective(int );
void showpeak();
void show();
void ReverseStak();
main()
{
	int n1,n2,n3,n4,n;

	cout<<"enter the element of stack \n";
	cin>>n1>>n2>>n3>>n4;
	push(n1);
	push(n2);
	push(n3);
	push(n4);
	showpeak();
	 ReverseStak();
	cout<<"\n enter number of element you want to delet";
	cin>>n;
	
	consective(n);
	show();
    
}
void push(int n)
{
	if(top==99)
	cout<<"overflow";
	
	
	top++;
	stack[top]=n;
}
void consective(int n)
{
	if(top==-1)
	{
		cout<<"empty";
	}
	else
	top-=n;
}
void show()
{
	for(int i=0;i<=top;i++)
	{
		cout<<stack[i]<<endl;
	}
}
void showpeak()
{
	cout<<"\n peak value is:  "<<stack[top];
}
void ReverseStak()
{
cout<<"\nstack in Reverse:\n";
	for(int i=top;i>=0;i--)
	cout<<stack[i]<<endl;
}
