import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.URL;
import java.net.UnknownHostException;

public class Main {

	private static final String HOST = "tues.bg";
	
//	private static final String HOST = "google.com";
//	private static final String HOST = "google.bg";
//	private static final String HOST = "www.google.com";

	public static void main(String[] args) throws IOException {

		Socket echoSocket = null;
		PrintWriter out = null;
		BufferedReader in = null;

		try {
			echoSocket = new Socket(HOST, 80);
			out = new PrintWriter(echoSocket.getOutputStream(), true);
			in = new BufferedReader(new InputStreamReader(echoSocket.getInputStream()));
		} catch (UnknownHostException e) {
			System.err.println("Unknow host: " + HOST);
			System.exit(1);
		} catch (IOException e) {
			System.err.println("Couldn't get I/O for the connection to: " + HOST);
			System.exit(2);
		}

		out.println("GET / HTTP/1.1");
		out.println("Host: " + HOST);
		out.println();
		
		String newHost="";
		String next;
		int serverStatus = 0;
		int c = 0;
		
		while(!(next = in.readLine()).equals("")) {
			System.out.println(next); // 1header	
			
			if (next.contains("ocation:")) {
				String loc = next;
				String[] parts = loc.split(" ");
				String part = parts[1];
				
				URL aURL = new URL(part);
				newHost = aURL.getAuthority();
			}
			
			c++;
			if (c==1) {
				if ( (next.contains("200 OK"))  ) {
					serverStatus = 200;
				} else if ( (next.contains("301")) ) {
					serverStatus = 301;
				} else if ( (next.contains("302")) ) {
					serverStatus = 302;
				} 
			} 
		} //while
		System.out.println();
		
		if (serverStatus==200) {
			while((next = in.readLine()) != null) {
				System.out.println(next); //1content	
			}
		} else if ((serverStatus==301) || (serverStatus==302)) {
			try {
				echoSocket = new Socket(newHost, 80);
				out = new PrintWriter(echoSocket.getOutputStream(), true);
				in = new BufferedReader(new InputStreamReader(echoSocket.getInputStream()));
			} catch (UnknownHostException e) {
				System.err.println("Unknow host: " + newHost);
				System.exit(1);
			} catch (IOException e) {
				System.err.println("Couldn't get I/O for the connection to: " + newHost);
				System.exit(2);
			}

			out.println("GET / HTTP/1.1");
			out.println("Host: " + newHost);
			out.println();

			while((next = in.readLine()) != null) {
				 System.out.println(next); //2header+2content
			}
		} //else

		out.close();
		in.close();
		echoSocket.close();
	}
}
