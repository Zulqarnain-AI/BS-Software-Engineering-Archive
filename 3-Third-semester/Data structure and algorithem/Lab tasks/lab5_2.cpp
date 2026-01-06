							//lab5-2

#include<iostream>
using namespace std;

int stack[100];
int top=-1;
void push(int );
void pop();
void show();
main()
{
	int n1,n2,n3,n4;

	cout<<"enter the element of stack \n";
	cin>>n1>>n2>>n3>>n4;
	push(n1);
	push(n2);
	push(n3);
	push(n4);
	pop();
	show();
}
void push(int n)
{
	if(top==99)
	cout<<"overflow";
	
	
	top++;
	stack[top]=n;
}
void pop()
{
	if(top==-1)
	{
		cout<<"empty";
	}
	else
	top--;
}
void show()
{
	for(int i=0;i<=top;i++)
	{
		cout<<stack[i]<<endl;
	}
}
