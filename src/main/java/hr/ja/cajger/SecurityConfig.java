package hr.ja.cajger;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.mem.InMemoryUsersConnectionRepository;
import org.springframework.social.connect.web.ProviderSignInController;

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
                .antMatchers("/login*", "/signin/**", "/signup/**").permitAll();
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
