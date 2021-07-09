package com.threebrata.krok.Entity;

import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Table(name = "reava_group")
@EqualsAndHashCode
@Setter
@Getter
@Entity
@NoArgsConstructor
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String groupName;

    @OneToMany(mappedBy = "group", fetch = FetchType.EAGER)
    private List<User> students;
}
