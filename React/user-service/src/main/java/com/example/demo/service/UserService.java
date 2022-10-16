package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entity.User;
import com.example.demo.model.Car;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

		@Autowired
		UserRepository userRepository;
		
		@Autowired
		RestTemplate restTemplate;
		
		public List<User> getAll(){
			return userRepository.findAll();
		}
		
		public User getUserById(int id) {
			return userRepository.findById(id).orElse(null);
		}
		
		public User save(User user) {
			User userNew = userRepository.save(user);
			return userNew;
		}
		
		public List<Car> getCars(int userId){
			//List<Car> cars = restTemplate.getForObject("http://localhost:8002/car/byuser/" + userId, List.class);
			List<Car> cars = restTemplate.getForObject("http://contenedor-car:8002/car/byuser/" + userId, List.class);
			return cars;
		}
}
