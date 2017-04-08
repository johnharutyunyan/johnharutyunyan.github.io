<?php

$info = file_get_contents("http://api.trello.com/1/members/me?fields=username,fullName&key=53346ac25adb834c3f58b4bf7efebe30&token=a0ed8d5f9dc2438b93942d738f5eeed03720f6d9a03240e4274271f522459251");

$value = json_decode($info, true);


?>


<script type="text/javascript">
    var name;
    name = <?= $value['fullName']?>

</script>
