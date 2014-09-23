package org.elsys.ip.java;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class StreamExamples {
	
	public static void main(String[] args) throws IOException {
		final String line = getLine();
		final String lineUC = lineToUpperCase(line); 
		System.out.println(lineUC); //UpperCase
	}
	
	private static String lineToUpperCase(String line) {
		line = line.toUpperCase();
		return line;
	}

	private static String getLine() throws IOException {
		final InputStream input = System.in;
		final InputStreamReader inputStreamReader = new InputStreamReader(input);
		final BufferedReader reader = new BufferedReader(inputStreamReader);
		
		final String wholeLine = reader.readLine();
		return wholeLine;
	}

}