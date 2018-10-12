package hr.ja.cajger.model;


import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.data.jpa.domain.AbstractAuditable;

import javax.persistence.Entity;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Event extends AbstractAuditable<User, Long> {
}
