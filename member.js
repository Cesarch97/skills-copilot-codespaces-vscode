function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/member/skills.html',
    controller: 'MemberSkillsCtrl',
    controllerAs: 'vm',
    scope: {
      member: '=',
      skills: '=',
      editable: '='
    }
  };
}