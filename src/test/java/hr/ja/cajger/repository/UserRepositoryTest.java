package hr.ja.cajger.repository;

import hr.ja.cajger.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository repository;

    @Test
    public void testSaveUser() {
        User u = new User();
        u.setName("Pero");
        repository.save(u);

        Iterable<User> all = repository.findAll();
        assertNotNull(all.iterator().next());

    }
}
