import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import com.google.gson.Gson;
import java.io.FileNotFoundException;
import java.io.File;
 
public class TestScript {
	public String test(File file) throws FileNotFoundException {
		Gson gson = new Gson();
		BufferedReader br = new BufferedReader(new FileReader(file));
		String obj = gson.fromJson(br, String.class);
		return obj;
	}
}