test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_1",
                                "Which HTTP method is used to create a new resource in REST?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("GET", "POST", "PUT", "DELETE"),
                                "POST",
                                "obj_restfulapis")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_2",
                                "What annotation combines @Controller and @ResponseBody?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@RestController", "@WebController", "@APIController", "@ResponseController"),
                                "@RestController",
                                "obj_restfulapis")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_3",
                                "REST APIs should use nouns instead of verbs in URL paths",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_restfulapis")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_4",
                                "Which annotation is used to extract path variables from URLs?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("@PathVariable", "@RequestParam", "@RequestBody", "@ModelAttribute"),
                                "@PathVariable",
                                "obj_restfulapis")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_5",
                                "What HTTP status code indicates successful resource creation?", 
                                QUESTION_TYPE_CHOICE,
                                new Array("200 OK", "201 Created", "204 No Content", "202 Accepted"),
                                "201 Created",
                                "obj_restfulapis")
                );
                
test.AddQuestion( new Question ("com.scorm.springboot.interactions.rest_6",
                                "@GetMapping is a shortcut for @RequestMapping(method = RequestMethod.GET)",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_restfulapis")
                );