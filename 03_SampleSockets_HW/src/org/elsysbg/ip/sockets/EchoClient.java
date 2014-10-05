package org.elsysbg.ip.sockets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class EchoClient {

	private static final String SERVER = "localhost";
	public final String request;

	public EchoClient(String request) {
		this.request = request;
	}
	
	
	
	public static void main(String[] args) throws IOException, ParseException {
		System.out.println("Enter date");
				
		final InputStream input = System.in;
		final InputStreamReader inputStreamReader = new InputStreamReader(input);
		final BufferedReader reader = new BufferedReader(inputStreamReader);
		
		final String readLine = reader.readLine();
		
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date userDate = formatter.parse(readLine);

		final EchoClient echoClient = new EchoClient(readLine);
		final String response = echoClient.send(userDate);

		
		System.out.println("Response: " + response);
		if (!response.equals(readLine)) {
			System.err.println("Response different than request");
		}
		
	}



	private String send(Date ud) throws UnknownHostException, IOException, ParseException {
		final Socket clientSocket = new Socket(SERVER ,EchoServer.SERVER_PORT);
		
		final InputStream inputStream = clientSocket.getInputStream();
		final OutputStream outputStream = clientSocket.getOutputStream();
		
		final InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
		final BufferedReader in = new BufferedReader(inputStreamReader);
		
		PrintWriter out = new PrintWriter(outputStream);

		
		long DAY_IN_MILLIS = 1000 * 60 * 60 * 24;
		Date dateNow = new Date();
		
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		int diffInDays = (int) ((dateNow.getTime() - ud.getTime())/ DAY_IN_MILLIS );
		System.out.println("days: "+diffInDays);
		
		out.println(diffInDays);
		
		out.flush();
		
		final String result = in.readLine();
		
		clientSocket.close();
		
		return (formatter.format(ud));
	}

}
