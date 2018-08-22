

@RestController
public class DemoController {

	@GetMapping(value="/get")
	public String welcome() {
 "Welcome to STS project";
	}
}
