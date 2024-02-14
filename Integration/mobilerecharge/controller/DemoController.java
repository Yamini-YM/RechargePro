package com.example.mobilerecharge.controller;

import static com.example.mobilerecharge.utils.MyConstant.DEMO;
import static org.springframework.http.HttpStatus.ACCEPTED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(DEMO)
public class DemoController {

    @GetMapping
    public ResponseEntity<String> sayHello() {
        return new ResponseEntity<>("Hello!", ACCEPTED);
    }

}
