package org.elsysbg.ip.sockets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class EchoServer {
	
	public static final int SERVER_PORT = 44012;
	
	private /*static*/ class ClientHandler extends Thread {
		private final Socket clientSocket;
		
		public ClientHandler(Socket clientSocket) {
			this.clientSocket = clientSocket;
		}
		
		@Override
		public void run() {
			try {
				handleClient(clientSocket);
			} catch (IOException e) {
				e.printStackTrace();
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
	
		private void handleClient(final Socket clientSocket) throws IOException, ParseException {
			final InputStream inputStream = clientSocket.getInputStream();
			final OutputStream outputStream = clientSocket.getOutputStream();
			
			final InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
			final BufferedReader in = new BufferedReader(inputStreamReader);
			final PrintWriter out = new PrintWriter(outputStream);
			
			final String readLine = in.readLine();

			//Date now
			Date dateNow = new Date();
			
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
			Date userDate = formatter.parse(readLine);
//			System.out.println(formatter.format(date));
	 
			long DAY_IN_MILLIS = 1000 * 60 * 60 * 24;

			int diffInDays = (int) ((dateNow.getTime() - userDate.getTime() )/ DAY_IN_MILLIS );
//			System.out.println("days: "+diffInDays);

			out.println(diffInDays);
//			out.println(readLine);
			
			out.flush();
			
			clientSocket.close();

		}
		
	}
	
	
	private boolean started;
	
	public static void main(String[] args) throws IOException {
		new EchoServer().run();
	}


	public void run() throws IOException {
		started = true;
		
		final ServerSocket serverSocket = new ServerSocket(SERVER_PORT);
		
		while (started) {
			started = false;
			final Socket clientSocket = serverSocket.accept();
			
			new ClientHandler(clientSocket).start();
		}
		
		serverSocket.close();
	}
	
	
}
