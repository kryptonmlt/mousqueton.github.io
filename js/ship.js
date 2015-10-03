
var specialPower = {
    ACCEL: 0, // increases acceleration
    DAMAGE: 1, // increases damage output
    STEALTH: 2 //goes invisible
};

function Ship(id, hull, weapon, projectile, specialPower, isHuman, teamId) {
  this.id = id;
  this.hull = hull;  
  this.isHuman = isHuman;
  this.teamId = teamId;
  
  this.specialPower = specialPower;
  this.damage = weapon.damage + projectile.damage;
  this.reloadTime = weapon.reloadTime;
  this.range = projectile.range;
  this.health = hull.health;
  this.acceleration = hull.acceleration;
  this.turnSpeed = hull.turnSpeed;
  this.projectileSpeed = projectile.speed;
  
  
  this.currentSpeed = 0;
  this.angularFacing = 0;
}