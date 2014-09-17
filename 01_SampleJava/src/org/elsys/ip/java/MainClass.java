package org.elsys.ip.java;

public class MainClass extends MathfuncClass {
	public static void main(String[] args) {
		
		int k=10;
		for (int i = 1; i <= k; i++) {
			if (i%2 == 0) {
				System.out.println("Even num: "+i);
			}
		}
		System.out.println();
		
		MathfuncClass m = new MathfuncClass();
		m.sqrt(25);
		m.rand();
		
	
		String a = new String("aaa");
		String b = new String("aaa");
		String c = a;
		
		System.out.println(a.equals(b));
		System.out.println(a.equals(c));
		System.out.println(a==b);
		System.out.println(a==c);

}	}
