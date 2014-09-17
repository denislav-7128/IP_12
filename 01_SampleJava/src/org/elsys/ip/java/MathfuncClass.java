package org.elsys.ip.java;

public class MathfuncClass {

	public double sqrt(double num) {
		double res = (double) Math.sqrt(num);
		System.out.println("Sqrt of "+num+" is: "+res);
		return res;
	}
	
	void rand() {
		double num;
		num = 100 * ((double) Math.random());
		System.out.println("Random num: "+num);
	}

}
