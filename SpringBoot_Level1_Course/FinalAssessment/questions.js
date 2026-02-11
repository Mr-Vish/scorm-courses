// Final Comprehensive Assessment - 25 Unique Questions

// Spring Boot Architecture & Fundamentals (5 questions)
test.AddQuestion(new Question("final1", "What is the primary advantage of Spring Boot's auto-configuration feature?", QUESTION_TYPE_CHOICE, ["Reduces boilerplate code", "Increases application size", "Requires manual configuration", "Slows down development"], "Reduces boilerplate code", "architecture"));

test.AddQuestion(new Question("final2", "Which annotation is used to mark a class as a Spring Boot main application class?", QUESTION_TYPE_CHOICE, ["@SpringBootApplication", "@MainApplication", "@BootApplication", "@SpringMain"], "@SpringBootApplication", "architecture"));

test.AddQuestion(new Question("final3", "Spring Boot follows which architectural pattern by default?", QUESTION_TYPE_CHOICE, ["MVC (Model-View-Controller)", "MVP (Model-View-Presenter)", "MVVM (Model-View-ViewModel)", "Layered Architecture"], "MVC (Model-View-Controller)", "architecture"));

test.AddQuestion(new Question("final4", "What is the default embedded server in Spring Boot?", QUESTION_TYPE_CHOICE, ["Tomcat", "Jetty", "Undertow", "Netty"], "Tomcat", "architecture"));

test.AddQuestion(new Question("final5", "Which file is used to configure Spring Boot application properties?", QUESTION_TYPE_CHOICE, ["application.properties", "config.properties", "spring.properties", "boot.properties"], "application.properties", "architecture"));

// Dependency Injection & IoC (5 questions)
test.AddQuestion(new Question("final6", "What does IoC stand for in Spring framework?", QUESTION_TYPE_CHOICE, ["Inversion of Control", "Integration of Components", "Instance of Class", "Interface of Controller"], "Inversion of Control", "ioc"));

test.AddQuestion(new Question("final7", "Which annotation is used for constructor-based dependency injection?", QUESTION_TYPE_CHOICE, ["@Autowired", "@Inject", "@Resource", "All of the above"], "All of the above", "ioc"));

test.AddQuestion(new Question("final8", "What is the default scope of a Spring bean?", QUESTION_TYPE_CHOICE, ["Singleton", "Prototype", "Request", "Session"], "Singleton", "ioc"));

test.AddQuestion(new Question("final9", "Which annotation is used to mark a class as a Spring component?", QUESTION_TYPE_CHOICE, ["@Component", "@Bean", "@Service", "@Repository"], "@Component", "ioc"));

test.AddQuestion(new Question("final10", "What happens when Spring cannot find a bean to inject?", QUESTION_TYPE_CHOICE, ["NoSuchBeanDefinitionException is thrown", "Application starts normally", "Null is injected", "Default bean is created"], "NoSuchBeanDefinitionException is thrown", "ioc"));

// REST APIs & Controllers (5 questions)
test.AddQuestion(new Question("final11", "Which HTTP method is typically used for creating new resources in REST?", QUESTION_TYPE_CHOICE, ["POST", "GET", "PUT", "DELETE"], "POST", "rest"));

test.AddQuestion(new Question("final12", "What annotation is used to handle HTTP GET requests in Spring Boot?", QUESTION_TYPE_CHOICE, ["@GetMapping", "@RequestMapping", "@PostMapping", "@PutMapping"], "@GetMapping", "rest"));

test.AddQuestion(new Question("final13", "Which annotation is used to extract path variables from URL?", QUESTION_TYPE_CHOICE, ["@PathVariable", "@RequestParam", "@RequestBody", "@ModelAttribute"], "@PathVariable", "rest"));

test.AddQuestion(new Question("final14", "What is the purpose of @ResponseBody annotation?", QUESTION_TYPE_CHOICE, ["Converts return value to HTTP response body", "Reads HTTP request body", "Validates request parameters", "Handles exceptions"], "Converts return value to HTTP response body", "rest"));

test.AddQuestion(new Question("final15", "Which HTTP status code indicates successful resource creation?", QUESTION_TYPE_CHOICE, ["201 Created", "200 OK", "204 No Content", "202 Accepted"], "201 Created", "rest"));

// Data Persistence & JPA (5 questions)
test.AddQuestion(new Question("final16", "What does JPA stand for?", QUESTION_TYPE_CHOICE, ["Java Persistence API", "Java Programming Architecture", "Java Platform Application", "Java Process Automation"], "Java Persistence API", "jpa"));

test.AddQuestion(new Question("final17", "Which annotation is used to mark a class as a JPA entity?", QUESTION_TYPE_CHOICE, ["@Entity", "@Table", "@Component", "@Repository"], "@Entity", "jpa"));

test.AddQuestion(new Question("final18", "What annotation is used to mark the primary key field in JPA?", QUESTION_TYPE_CHOICE, ["@Id", "@PrimaryKey", "@Key", "@Identifier"], "@Id", "jpa"));

test.AddQuestion(new Question("final19", "Which interface should a repository extend for basic CRUD operations?", QUESTION_TYPE_CHOICE, ["CrudRepository", "JpaRepository", "Repository", "PagingAndSortingRepository"], "CrudRepository", "jpa"));

test.AddQuestion(new Question("final20", "What is the purpose of @GeneratedValue annotation?", QUESTION_TYPE_CHOICE, ["Auto-generates primary key values", "Validates entity fields", "Maps entity relationships", "Configures database schema"], "Auto-generates primary key values", "jpa"));

// Configuration & Testing (5 questions)
test.AddQuestion(new Question("final21", "Which annotation is used to define configuration classes in Spring Boot?", QUESTION_TYPE_CHOICE, ["@Configuration", "@Config", "@Settings", "@Properties"], "@Configuration", "config"));

test.AddQuestion(new Question("final22", "What is the purpose of @Profile annotation?", QUESTION_TYPE_CHOICE, ["Activates beans for specific environments", "Profiles application performance", "Creates user profiles", "Manages security profiles"], "Activates beans for specific environments", "config"));

test.AddQuestion(new Question("final23", "Which annotation is used for integration testing in Spring Boot?", QUESTION_TYPE_CHOICE, ["@SpringBootTest", "@Test", "@IntegrationTest", "@WebTest"], "@SpringBootTest", "config"));

test.AddQuestion(new Question("final24", "What is the default profile name in Spring Boot?", QUESTION_TYPE_CHOICE, ["default", "main", "production", "development"], "default", "config"));

test.AddQuestion(new Question("final25", "Which property is used to set the active profile in application.properties?", QUESTION_TYPE_CHOICE, ["spring.profiles.active", "spring.profile.active", "application.profile", "spring.active.profile"], "spring.profiles.active", "config"));