package hr.ja.cajger.repository;

import hr.ja.cajger.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Iterator;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    public Iterator<User> findAllByName(String name) ;
}
