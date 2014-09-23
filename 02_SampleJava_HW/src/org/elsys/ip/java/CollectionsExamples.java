package org.elsys.ip.java;

import java.util.HashMap;
import java.util.Map;

public class CollectionsExamples {

	public static void main(String[] args) {
		mapExample();
	}
	
	private static void mapExample() {
		final Map<String, Integer> m = new HashMap<String, Integer>();
		m.put("Bulgaria", 7);
		m.put("Germany", 80);
		m.put("Romania", 20);
		m.put("Greece", 11);
		m.put("Israel", 8);
		m.put("Costa Rica", 4);
		m.put("Macedonia", 2);
		
		for (String x:m.keySet()){
			if (m.get(x) >= 10) {
				System.out.printf("%s\n",x);
			}
		}
	}
	
}