package hr.ja.cajger;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
@ComponentScan(basePackages = {"hr.ja"})
public class SecurityConfig extends WebSecurityConfigurerAdapter {

//    @Autowired
//    private ConnectionFactoryLocator connectionFactoryLocator;

//    @Autowired
//    private UsersConnectionRepository usersConnectionRepository;


//    @Autowired
//    private FacebookConnectionSignup facebookConnectionSignup;


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/login*", "/signin/**", "/signup/**").permitAll()
        ;
    }

//    @Bean
//    public ProviderSignInController providerSignInController() {
//        ((InMemoryUsersConnectionRepository) usersConnectionRepository)
//                .setConnectionSignUp(facebookConnectionSignup);
//
//        return new ProviderSignInController(
//                connectionFactoryLocator,
//                usersConnectionRepository,
//                new FacebookSignInAdapter());
//    }
}
