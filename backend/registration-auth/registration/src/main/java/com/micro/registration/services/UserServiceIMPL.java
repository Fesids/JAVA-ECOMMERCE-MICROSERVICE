package com.micro.registration.services;

import com.micro.registration.DTO.UserDTO;
import com.micro.registration.models.User;
import com.micro.registration.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserServiceIMPL implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public User saveUser(String urole, UserDTO body) {
       //var user = (urole.equals("ADMIN")? body.createAdmin(body): body.createStaff(body));

        User user = null;

        switch (urole){

            case "ADMIN" -> {
                user = body.createAdmin(body);
                userRepository.save(user);
            }

            case "STAFF" ->{
                user = body.createStaff(body);
                userRepository.save(user);
            }

            case "CLIENT" ->{
                user = body.createClient(body);
                userRepository.save(user);
            }

        }

        return user;


    }

    @Override
    public Optional<User> retrieveByEmail(String email) {

        Query query =  new Query();
        query.addCriteria(Criteria.where("email").is(email));

        var user = mongoTemplate.findOne(query, User.class, "USERS");

        assert user != null;
        //return Optional.empty();
        return Optional.of(user);
    }

    @Override
    public Optional<User> retrieveByUsername(String username) {
        Query query =  new Query();
        query.addCriteria(Criteria.where("username").is(username));

        var user = mongoTemplate.findOne(query, User.class, "USERS");

        assert user != null;

        return Optional.of(user);
    }

    @Override
    public User login(String email, String password) {
        Query query =  new Query();
        query.addCriteria(Criteria.where("email").is(email));
        var user = mongoTemplate.findOne(query, User.class, "USERS");

        assert user != null;

        return user;

    }


}
