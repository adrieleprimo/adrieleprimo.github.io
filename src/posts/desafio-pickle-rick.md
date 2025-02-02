---
title: "Desafio Pickle Rick - TryHackMe"
author: "Adriele Primo"
date: "05/09/2024"
---
# Desafio Pickle Rick - TryHackMe
Este texto tem como objetivo apresentar a forma como eu, Obtuosa, uma jovem **iniciante** em cibersegurança, resolvi o desafio com tema de Rick e Morty intitulado [**Pickle Rick**](https://tryhackme.com/r/room/picklerick), da plataforma [**TryHackMe**](https://tryhackme.com/), em um servidor da Web, no qual a finalidade é encontrar três ingredientes que possam ajudar o famoso personagem Rick, da série animada Rick e Morty, a produzir uma poção que o transforme novamente em humano, pois o mesmo se encontra transformado em um picles e sendo o conhecidíssimo Pickle Rick!

---
## Introdução

Antes de começarmos o processo quanto a máquina Pickle Rick, é importante ressaltar algumas informações, mesmo que breves sobre o que seria o **TryHackMe** e as famosas **máquinas de hacking** (Hacking Machines).

**TryHackMe** é uma plataforma online, no qual o objetivo central é lhe ajudar a aprender sobre cibersegurança, usando exercícios práticos e "laboratórios", tudo isso pelo navegador.  
**Máquinas de hacking** ou as famosas Hacking machines são os ambientes virtuais utilizados pelos usuários, para aprimorar suas habilidades em hacking e entendimento na área de cibersegurança. Nelas é possível participar de cenários de ataques e também vulnerabilidades, em que os usuários possam usar de seu conhecimento e técnicas de exploração, de maneira principalmente legal e segura. Logo, o desafio Pickle Rick é justamente uma máquina de hacking, com foco em buscar vulnerabilidades até seu propósito final.

---
## Reconhecimento

Após essas breves informações definidas, será feita a trajetória que salvou Rick!

[![Tela de início da Máquina virtual Pickle Rick do TryHackMe](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0ed4ebsbq4krhafhubdd.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0ed4ebsbq4krhafhubdd.png)

[![Tela inicial do alvo, com uma mensagem de pedido de ajuda do Rick para o Morty](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fesh4nrj49414wemu42pm.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fesh4nrj49414wemu42pm.png)
Ao adentrar a tela de desafio, uma das ações que foram realizadas foi justamente a inspeção no código e verificar a forma com que o HTML do alvo estava estruturado e logo de cara tivemos o acesso a informação sobre o username do Rick, no final do código, em formato de comentário.

[![Informações sobre a estrutura html do alvo](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fj5pib6bn3pf08fw3ptqr.jpeg)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fj5pib6bn3pf08fw3ptqr.jpeg)

Com isso, foi traçado os principais objetivos nesse primeiro momento, tendo em vista que o username na inspeção do html significaria que teríamos uma tela de login e a necessidade de uma senha para efetivar por completo esse acesso ao alvo. Entretanto, ao tentar encontrar a tela de login em um primeiro momento, não foi realizado com tanta facilidade e um dos principais focos foi justamente buscar essa tela de login e principalmente, entender qual a linguagem de programação que estaria realizando as funcionalidades deste site.

[![Imagem de não encontrado ao acessar /login](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7lqi242r2ai4gjur5vds.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7lqi242r2ai4gjur5vds.png)

Deste modo, decorreu a busca de informações sobre qual seria essa linguagem por trás dos panos e uma das ideias foi justamente a utilização do comando [curl](https://www.hostinger.com.br/tutoriais/comando-curl-linux).

[![Requisição usando comando curl](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4ubuskis9op3c0prwp0i.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4ubuskis9op3c0prwp0i.png)  
O alvo utiliza Ubuntu para rodar o servidor Web Apache. Porém, não foi possível obter uma informação mais precisa sobre qual seria a linguagem utilizada pelo alvo através do curl. Deste modo, o head do próprio html do site possuía o diretório [/assets/](https://developers.vnda.com.br/docs/pasta-assets), que tem como foco o armazenamento de mídia, fontes, etc., de um site ou aplicação web.

[![Informação do head contendo a pasta /assets](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2yhji2g80651f0rxsdme.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2yhji2g80651f0rxsdme.png)

[![Pasta /assets com informações de conteúdos estáticos, etc, do alvo ](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F558etoiezqvnzizs2qx2.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F558etoiezqvnzizs2qx2.png)

Apesar das informações presentes, não foi possível encontrar (sob o olhar de uma pessoa que está iniciando) informações referentes a linguagem usada.  
A forma operada logicamente foi justamente introduzir .php no final e com isso o acesso a tela de /login.php. Isso foi puramente achismo, tendo em vista que utilizar uma ferramenta de busca de diretórios tornaria o processo mais prático, porém, o objetivo aqui é tentar realizar manualmente e aprimorar as noções no decorrer, sem depender de ferramentas para isso.

[![Tela de login com username e password](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkdbfmkcsrdnb1tr37zne.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkdbfmkcsrdnb1tr37zne.png)

Com a confirmação de que usam [PHP](https://www.php.net/manual/pt_BR/intro-whatis.php) e para além disso, o acesso ao diretório /login.php. Entretanto, faltava a senha e se tem o diretório /assets, poderia também ter o [/robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=pt-br), que gerencia quais diretórios podem ser vasculhados em um respectivo site. A senha do R1ckRul3s estava justamente no /robots.txt.

[![Diretório /robots.txt contendo a senha do usuário](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxc12hisefglgh9ekfp6n.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxc12hisefglgh9ekfp6n.png)



## Exploração
A tela inicial após o login tem um painel de comandos, e a informação anterior de que o servidor rodava em Ubuntu trouxe a conclusão de que podemos usar os próprios comandos do terminal e além disso, ter acesso aos diretórios completos do alvo. No inspecionar desta tela, tem uma dica interessante, uma frase codificada em [Base64](https://marquesfernandes.com/self/o-que-e-base64-para-que-serve-e-como-funciona/), no comentário do html.

[![Tela inicial com painel de comandos](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F80xr7xj2sj1g5ob8w56z.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F80xr7xj2sj1g5ob8w56z.png)

O comando [ls](https://www.freecodecamp.org/portuguese/news/o-comando-ls-do-linux-como-listar-arquivos-em-um-diretorio-e-flags-de-opcao/) lista os arquivos e os diretórios, além do comando [cd](https://guialinux.uniriotec.br/cd/) para navegar entre os diretórios do terminal.

O primeiro ingrediente é localizado usando ls, no painel de comando e é intitulado **Sup3rS3cretPickl3Ingred.txt**. Como dica para você, caso tenha interesse, é que pode ser usado tanto o [pwd](https://www.certificacaolinux.com.br/comando-linux-pwd/) para localizar o diretório atual em conjunto com o [less](https://guialinux.uniriotec.br/less/) para ler o arquivo txt, quanto também digitar diretamente no URL, que terá a resposta do primeiro ingrediente. Lembrando que "hipoteticamente" o comando [cat](https://www.hostinger.com.br/tutoriais/comando-cat-linux) está desabilitado, junto com o [nano](https://www.certificacaolinux.com.br/comando-nano-no-linux-editor-de-texto-guia-basico/), [vim](https://dev.to/nfo94/comandos-basicos-do-vim-e-configuracoes-uteis-gkn), [more](https://guialinux.uniriotec.br/more/), etc.  

```
ls -la
total 40
drwxr-xr-x 3 root   root   4096 Feb 10  2019 .
drwxr-xr-x 3 root   root   4096 Feb 10  2019 ..
-rwxr-xr-x 1 ubuntu ubuntu   17 Feb 10  2019 Sup3rS3cretPickl3Ingred.txt
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 10  2019 assets
-rwxr-xr-x 1 ubuntu ubuntu   54 Feb 10  2019 clue.txt
-rwxr-xr-x 1 ubuntu ubuntu 1105 Feb 10  2019 denied.php
-rwxrwxrwx 1 ubuntu ubuntu 1062 Feb 10  2019 index.html
-rwxr-xr-x 1 ubuntu ubuntu 1438 Feb 10  2019 login.php
-rwxr-xr-x 1 ubuntu ubuntu 2044 Feb 10  2019 portal.php
-rwxr-xr-x 1 ubuntu ubuntu   17 Feb 10  2019 robots.txt

```

**Nota**: Caso você tente acessar outras opções do menu, além do Commands, terá seu acesso negado, por não ser o verdadeiro Rick.

[![Comando ls -la lista arquivos e diretórios presentes](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fk0f6axu2d5gyeueapkj2.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fk0f6axu2d5gyeueapkj2.png)

O segundo ingrediente é um pouco mais difícil de localizar, pois para ter acesso é necessário averiguar os diretórios e subdiretórios. Neste caso, a dica que pode ser dada é a combinação dos comandos cd e ls, para que você tenha acesso a listagem de arquivos e diretórios. Lembra da dica da frase da tela inicial, que estava codificada em Base64? É exatamente esse o pensamento, explorar o máximo de diretórios possíveis. Caso continue tendo dificuldades, a dica maior é focar no diretório /home, pois é lá que estará a resposta.  

```
cd ../../../home/rick;ls -la
second ingredients


```

[![Segundo ingrediente na pasta do usuário rick](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3d22e8hcvdrga5ehtmt2.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3d22e8hcvdrga5ehtmt2.png)  
**Nota**: Como acessar um arquivo com espaços? pode ser usando o próprio less com aspas ou com barra invertida.

Por fim e não menos importante, o terceiro ingrediente se encontra em um arquivo oculto em um dos perfis, por isso é interessante usar o comando -ls juntamente com o -a, para ter acesso a arquivos ocultos. Este arquivo contém os registros dos comandos que o usuário utilizou no terminal, ou seja, de acordo com o perfil terá o acesso aos comandos executados e consequentemente o último ingrediente.  

```
cd ../../../home/ubuntu;ls -la
total 44
drwxr-xr-x 5 ubuntu ubuntu 4096 Jul 11 10:37 .
drwxr-xr-x 4 root   root   4096 Feb 10  2019 ..
-rw------- 1 ubuntu ubuntu  769 Jul 11 11:18 .bash_history
-rw-r--r-- 1 ubuntu ubuntu  220 Aug 31  2015 .bash_logout
-rw-r--r-- 1 ubuntu ubuntu 3771 Aug 31  2015 .bashrc
drwx------ 3 ubuntu ubuntu 4096 Jul 11 10:39 .cache
drwx------ 3 ubuntu ubuntu 4096 Jul 11 10:37 .gnupg
-rw-r--r-- 1 ubuntu ubuntu  655 May 16  2017 .profile
drwx------ 2 ubuntu ubuntu 4096 Feb 10  2019 .ssh
-rw-r--r-- 1 ubuntu ubuntu    0 Feb 10  2019 .sudo_as_admin_successful
-rw------- 1 ubuntu ubuntu 4267 Feb 10  2019 .viminfo

```

[![Listagem de arquivos e diretórios ocultos do perfil ubuntu](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsettu94sqtbknuy8ukr3.png)](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsettu94sqtbknuy8ukr3.png)  
**Nota**: Para acessar o arquivo oculto, é importante usar o sudo para ter acesso privilegiado junto com o less.



## Conclusão

Portanto, através da máquina Pickle Rick foi possível compreender um pouco mais sobre a estrutura do html e um pouco sobre PHP, alguns diretórios que são comuns de encontrar como o /assets e o próprio /robots.txt. Para além disso, noções referentes aos comandos linux como cd, ls, less, pwd, etc. Por consequência, ter um olhar mais prático sobre web hacking, tendo em vista que é de suma importância compreender as bases de conhecimento em cibersegurança para conseguir realizar o desafio. As informações contidas aqui são apenas uma das formas possíveis de resolver o problema, tem muitas outras possbilidades e você também pode ter a sua, não se apegue apenas a uma perspectiva e caso você queira pontuar sobre algo, trazer sua forma de resolução, debater sobre algo ou alguma afirmação equivocada da minha parte, sinta-se a vontade, estamos aqui para somar e aprender. Lembre-se, a educação é a maior fonte de transformação, não desista!

![Rick](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjxwm3bg86954ab28wv3a.gif)
