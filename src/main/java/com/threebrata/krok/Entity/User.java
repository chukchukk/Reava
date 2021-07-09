package com.threebrata.krok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;


import javax.persistence.*;

@Entity
@Table(name = "reava_user")
@EqualsAndHashCode
@Setter
@Getter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String login;
    private String password;

    @ManyToOne(fetch = FetchType.EAGER)
    private Group group;

}
