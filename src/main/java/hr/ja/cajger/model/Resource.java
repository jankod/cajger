package hr.ja.cajger.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.data.jpa.domain.AbstractAuditable;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Resource extends AbstractAuditable<User, Long> {

    String eventColor;
    String eventBackgroundColor;
    String eventBorderColor;
    String eventTextColor;
    String eventClassName;
}
