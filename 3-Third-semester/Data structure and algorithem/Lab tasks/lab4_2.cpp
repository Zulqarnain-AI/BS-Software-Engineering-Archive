                         //lab4_2
#include<iostream>
using namespace std;
struct node{
	int data;
	node* next;
	
};
node* start=NULL;
node* creat(int);
void insertbeg(node*);
void insertend(node*);
void insertmid(int ,node*);
void show();
void deletbeg();
void deletend();
void deletmid(int);
main()
{
	int n1,n2,n3,n4,n,n5;
	cout<<"enter numbers:  ";
	cin>>n1>>n2>>n3>>n4;
	node* p1=creat(n1);
	node* p2=creat(n2);
	node* p3=creat(n3);
	node* p4=creat(n4);
	insertbeg(p1);
	insertbeg(p2);
	insertend(p3);
	cout<<"enter a position\n";
	cin>>n;
	insertmid(n,p4);
	show();
//	cout<<"delet beg\n";
//	deletbeg();
//	show();
//	cout<<"delet end\n";
//	deletend();
//	show();
	cout<<"delet mid\n";
	cout<<"enter position";
	cin>>n5;
	deletmid(n5);
	show();
	
	
}
node* creat(int n)
{
	node* p=new node;
	if(p==NULL)
	{
		cout<<"memory is full: ";
	}
	p->data=n;
	p->next=NULL;
	return p;
}
void insertbeg(node* p)
{
	node* tem;
	if(start==NULL)
	{
		start=p;
	}
	else
	{
	tem=start;
	start=p;
	p->next=tem;
	}
	
}
void insertend(node* p)
{   
   
	node* tem=start;
	while(tem->next!=NULL)
	{
		
		tem=tem->next;
	}
	tem->next=p;
}
void insertmid(int n,node* p)

{
	node* tem=start;
	for(int i=1;i<n;i++)
	{
		tem=tem->next;
	}
	p->next=tem->next;
	tem->next=p;
	
}
void show()
{
	node* tem=start;
	while(tem!=NULL)
	{
		cout<<tem->data<<endl;
		tem=tem->next;
	}
}
void deletbeg()
{
	node* tem=start;
	start=start->next;
	delete tem;
}

void deletend()
{
	node* loc;
	node* tem=start;
	while(tem->next!=NULL)
	{
		loc=tem;
		tem=tem->next;
	}
	loc->next=NULL;
	delete tem;
}
void deletmid(int n)
{
	node*loc1;
	node*loc2;
	node* tem =start;
	for(int i=1;i<n;i++)
	{
		loc1=tem;
		tem=tem->next;
		loc2=tem->next;
	}
	loc1->next=loc2;
	delete tem;
	
}
